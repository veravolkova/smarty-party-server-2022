const mongoose = require("mongoose");
const supertest = require("supertest");
const bcrypt = require("bcrypt");
const helper = require("./test_helper");
const app = require("../app");
const api = supertest(app);
const User = require("../models/user");

let user = {};

// Users

describe("when there is one user in the database", () => {

  beforeEach(async () => {
    // user exists
    await User.deleteMany({});
    const passwordHash = await bcrypt.hash("sekret", 10);
    user = new User({ username: "veravolkova", passwordHash });
    await user.save();
  });

  // get user

  test("users are returned as json", async () => {
    await api
      .get("/api/users")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("users are identified by field id", async () => {
    const response = await api
      .get("/api/users")
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(response.body[0].id).toBeDefined();
  });

  // create user

  test("user creation succeeds with a fresh username", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: "mluukkai",
      name: "Matti Luukkainen",
      password: "salainen",
    };

    await api
      .post("/api/users")
      .send(newUser)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1);

    const usernames = usersAtEnd.map((u) => u.username);
    expect(usernames).toContain(newUser.username);
  });

  test("user creation fails if username is too short", async () => {
    const newUser = {
      username: "vp",
      name: "Matti Luukkainen",
      password: "sekret"
    };

    const response = await api
      .post("/api/users")
      .send(newUser)
      .expect(422)
      .expect("Content-Type", /application\/json/);
    expect(response.error.text)
      .toContain("`username` (`vp`) is shorter than the minimum allowed length (3)");
  });

  test("creation fails is password length is less than 3", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: "mluukkai",
      name: "Matti Luukkainen",
      password: "sa",
    };

    const response = await api
      .post("/api/users")
      .send(newUser)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    expect(response.error.text)
      .toContain("Password should be at least 3 characters long");
    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length);

    const usernames = usersAtEnd.map((u) => u.username);
    expect(usernames).not.toContain(newUser.username);
  });

  test("user creation fails if the username is not unique", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: "veravolkova",
      name: "New User",
      password: "Password",
    };

    const response = await api
      .post("/api/users")
      .send(newUser)
      .expect(422)
      .expect("Content-Type", /application\/json/);

    expect(response.error.text)
      .toContain("expected `username` to be unique");

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length);

    const names = usersAtEnd.map((u) => u.name);
    expect(names).not.toContain(newUser.name);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
