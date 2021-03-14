import request from "supertest";
import { expect } from "chai";
import createServer from "server";

const app = createServer();

describe("server checks", function() {
    it("server is created without error", function(done) {
        request(app).get("/").expect(200, done)
    } ) 
})