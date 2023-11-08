const mongoose = require("mongoose");
const supertest = require("supertest");
const bcrypt = require("bcrypt");
const helper = require("./test_helper");
const app = require("../app");
const api = supertest(app);
const Gift = require("../models/gift");
const User = require("../models/user");

let user = {};
let userBasic = {};
let giftNames = ["L.O.L Surprise doll", "Barbie doll"];
let token = "";

// Gifts

describe("when there are some gifts in the database", () => {
  beforeEach(async () => {

    // some gifts exist
    await Gift.deleteMany({});
    const giftObjects = helper.initialGifts.map((gift) => new Gift(gift));
    const promiseArray = giftObjects.map((gift) => gift.save());
    await Promise.all(promiseArray);

    // user exists
    await User.deleteMany({});
    const passwordHash = await bcrypt.hash("sekret", 10);

    // admin user
    user = new User({
      username: "veravolkova",
      passwordHash,
      gifts: giftObjects,
      role: "admin",
    });
    await user.save();

    // basic user
    userBasic = new User({
      username: "tamaratamara",
      passwordHash,
      gifts: giftObjects,
      role: "basic",
    });
    await userBasic.save();

    // user logged in
    const response = await api.post("/api/login").send({
      username: "veravolkova",
      password: "sekret",
    });

    token = response.body.token;
  });

  // test login

  test("user login fails with invalid credentials", async () => {
    const response = await api
      .post("/api/login")
      .send({
        username: "verav",
        password: "sekret",
      })
      .expect(401)
      .expect("Content-Type", /application\/json/);

    expect(response.error.text).toContain("Invalid username or password");
  });

  // get gift

  test("gifts are returned as json", async () => {
    await api
      .get("/api/gifts")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });


  test("fails if unknown endpoint", async () => {
    const response = await api.get("/api/giftzzz").expect(404);

    expect(response.error.text).toContain("unknown endpoint");
  });


  test("all gifts are returned", async () => {
    const response = await api.get("/api/gifts");
    expect(response.body).toHaveLength(helper.initialGifts.length);
  });


  test("gifts are identified by field id", async () => {
    const response = await api
      .get("/api/gifts")
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(response.body[0].id).toBeDefined();
  });


  test("the first gift is returned with the correct name", async () => {
    const response = await api.get("/api/gifts");
    expect(giftNames).toContain(response.body[0].name);
  });


  test("gift is returned if id is valid", async () => {
    const response = await api.get("/api/gifts");
    const id = response.body[0].id;
    const gift = await api
      .get(`/api/gifts/${id}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(giftNames).toContain(gift.body.name);
  });


  test("throws error when calling gift with invalid id", async () => {
    const response = await api.get("/api/gifts/123").expect(400);
    expect(response.error.text).toContain("Malformatted Id");
  });

  // create gift

  test("gift creation succeeds with valid data", async () => {
    const newGift = {
      name: "L.O.L Surprise doll 2",
      description: "Christmas calendar",
      url: "https://fullstackopen.com/",
      reserved: false,
      users: [],
    };

    await api
      .post("/api/gifts")
      .set("Authorization", `bearer ${token}`)
      .send(newGift)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const response = await api.get("/api/gifts");
    const name = response.body.map((r) => r.name);

    expect(response.body).toHaveLength(helper.initialGifts.length + 1);
    expect(name).toContain("L.O.L Surprise doll 2");
  });


  test("gift creation fails with status code 422 if gift data is invaild", async () => {
    const newGift = {
      url: "https://fullstackopen.com/",
      reserved: false,
      users: [],
    };

    const response = await api
      .post("/api/gifts")
      .set("Authorization", `bearer ${token}`)
      .send(newGift)
      .expect(422)
      .expect("Content-Type", /application\/json/);
    expect(response.error.text).toContain("Path `name` is required");

    const result = await api.get("/api/gifts");
    expect(result.body).toHaveLength(helper.initialGifts.length);
  });


  test("gift creation fails if token is invalid", async () => {
    const newGift = {
      name: "L.O.L Surprise doll 2",
      description: "Christmas calendar",
      url: "https://fullstackopen.com/",
      reserved: false,
      users: [],
    };


    const response = await api
      .post("/api/gifts")
      .set("Authorization", `bearer invalid${token}`)
      .send(newGift)
      .expect(401)
      .expect("Content-Type", /application\/json/);
    expect(response.error.text).toContain("Invalid Token");

    const result = await api.get("/api/gifts");
    expect(result.body).toHaveLength(helper.initialGifts.length);
  });

  // remove gift

  test("removing a gift succeeds with status code 204 if user is an admin", async () => {
    const newGift = {
      name: "L.O.L Surprise doll 2",
      description: "Christmas calendar",
      url: "https://fullstackopen.com/",
      reserved: false,
      users: [user],
    };

    await api
      .post("/api/gifts")
      .set("Authorization", `bearer ${token}`)
      .send(newGift)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    let response = await api.get("/api/gifts");
    expect(response.body).toHaveLength(helper.initialGifts.length + 1);

    const justCreatedGift = response.body.find(
      (r) => r.name === "L.O.L Surprise doll 2"
    );

    await api
      .delete(`/api/gifts/${justCreatedGift.id}`)
      .set("Authorization", `bearer ${token}`)
      .expect(204);

    response = await api.get("/api/gifts");
    expect(response.body).toHaveLength(helper.initialGifts.length);
  });


  test("removing a gift fails with status code 403 if user is neither admin, nor an owner", async () => {
    // admin user logged out
    await api.post("/api/logout");

    // basic user logged in
    const logInResponse = await api.post("/api/login").send({
      username: "tamaratamara",
      password: "sekret",
    });

    token = logInResponse.body.token;

    let response = await api.get("/api/gifts");
    expect(response.body).toHaveLength(helper.initialGifts.length);
    const giftToDelete = response.body[0];

    const result = await api
      .delete(`/api/gifts/${giftToDelete.id}`)
      .set("Authorization", `bearer ${token}`)
      .expect(403);

    expect(result.error.text).toContain(
      "User is not permitted to modify this resource. Not an owner or sole owner of the gift."
    );

    response = await api.get("/api/gifts");
    expect(response.body).toHaveLength(helper.initialGifts.length);
  });


  test("removing a gift succeeds with status code 204 if user is not an admin, but is a sole owner", async () => {

    // admin user logged out
    await api.post("/api/logout");

    // basic user logged in
    const logInResponse = await api.post("/api/login").send({
      username: "tamaratamara",
      password: "sekret",
    });

    token = logInResponse.body.token;

    const newGift = {
      name: "L.O.L Surprise doll 2",
      description: "Christmas calendar",
      url: "https://fullstackopen.com/",
      reserved: true,
      users: [user, userBasic],
    };

    await api
      .post("/api/gifts")
      .set("Authorization", `bearer ${token}`)
      .send(newGift)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    let response = await api.get("/api/gifts");
    expect(response.body).toHaveLength(helper.initialGifts.length + 1);

    const justCreatedGift = response.body.find(
      (r) => r.name === "L.O.L Surprise doll 2"
    );

    await api
      .delete(`/api/gifts/${justCreatedGift.id}`)
      .set("Authorization", `bearer ${token}`)
      .expect(204);

    response = await api.get("/api/gifts");
    expect(response.body).toHaveLength(helper.initialGifts.length);
  });


  test("removing a gift fails with status code 404 if id is invalid", async () => {
    const response = await api
      .delete("/api/gifts/62ed7920b28bb1082833a101")
      .set("Authorization", `bearer ${token}`)
      .expect(404);

    expect(response.error.text).toContain("Gift does not exist");

    const result = await api.get("/api/gifts");
    expect(result.body).toHaveLength(helper.initialGifts.length);
  });

  // change reservation

  test("gift reservation succeeds when data is valid", async () => {
    const aGiftAtStart = (await helper.giftsInDb())[0];
    const giftToChange = {
      ...aGiftAtStart,
      reserved: true,
    };

    // reserve gift

    await api
      .patch(`/api/gifts/${aGiftAtStart.id}`)
      .send(giftToChange)
      .set("Authorization", `bearer ${token}`)
      .expect(200);

    const giftsAtEnd = await helper.giftsInDb();
    const aGiftAtEnd = giftsAtEnd.find((g) => g.id === aGiftAtStart.id);
    expect(aGiftAtEnd.reserved).toBeTruthy();
    expect(aGiftAtEnd.users).toBeTruthy();

    const secondGiftToChange = {
      ...aGiftAtStart,
      reserved: false,
    };

    // cancel reservation

    await api
      .patch(`/api/gifts/${aGiftAtStart.id}`)
      .send(secondGiftToChange)
      .set("Authorization", `bearer ${token}`)
      .expect(200);

    expect(aGiftAtEnd.reserved).toBeTruthy();
    expect(aGiftAtEnd.users).toBeTruthy();
  });

  // edit gift

  test("gift editing succeeds when data is valid", async () => {
    const aGiftAtStart = (await helper.giftsInDb())[0];

    const editedGift = {
      ...aGiftAtStart,
      name: "New name",
      description: "New description",
      url: "https://fullstackopen.com",
    };

    await api
      .put(`/api/gifts/${aGiftAtStart.id}`)
      .send(editedGift)
      .set("Authorization", `bearer ${token}`)
      .expect(200);

    let giftsAtEnd = await helper.giftsInDb();
    let aGiftAtEnd = giftsAtEnd.find((g) => g.id === aGiftAtStart.id);
    expect(aGiftAtEnd.name).toEqual("New name");
    expect(aGiftAtEnd.description).toEqual("New description");
    expect(aGiftAtEnd.url).toEqual("https://fullstackopen.com");

    // extra check for empty url

    editedGift.url = "";
    await api
      .put(`/api/gifts/${aGiftAtStart.id}`)
      .send(editedGift)
      .set("Authorization", `bearer ${token}`)
      .expect(200);

    giftsAtEnd = await helper.giftsInDb();
    aGiftAtEnd = giftsAtEnd.find((g) => g.id === aGiftAtStart.id);
    expect(aGiftAtEnd.name).toEqual("New name");
    expect(aGiftAtEnd.description).toEqual("New description");
    expect(aGiftAtEnd.url).toBeFalsy();
  });


  test("gift editing fails when data is invalid", async () => {
    const aGiftAtStart = (await helper.giftsInDb())[0];

    // name is shorter than required 5 characters
    let editedGift = {
      ...aGiftAtStart,
      name: "NN",
    };

    let response = await api
      .put(`/api/gifts/${aGiftAtStart.id}`)
      .send(editedGift)
      .set("Authorization", `bearer ${token}`)
      .expect(422);

    expect(response.error.text).toContain(
      "Path `name` (`NN`) is shorter than the minimum allowed length (5)."
    );

    // url regex violated
    editedGift.name = "valid";
    editedGift.url = "invalid";

    response = await api
      .put(`/api/gifts/${aGiftAtStart.id}`)
      .send(editedGift)
      .set("Authorization", `bearer ${token}`)
      .expect(422);

    expect(response.error.text).toContain("Invalid URL");
  });
});

afterAll(() => {
  mongoose.connection.close();
});
