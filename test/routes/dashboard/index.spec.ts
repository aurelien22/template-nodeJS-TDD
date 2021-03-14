import request from "supertest";
import { expect } from "chai";

import createServer from "server";
const app = createServer();

describe ("dashboard routes", function() {
    it("/dashboard responds with 200", function(done) {
        request(app).get("/dashboard").expect(200, done);
    });
});
