import { UsersApiHelper } from "../../support/helpers/user_apis";
import { CreateUserRequest } from "../../support/interfaces/create_user_request";

describe("Create a user by API", () => {
  beforeEach(() => {
    cy.fixture("api-config").as("apiConfig");
  });
  it("Shoukd create a new user and validate response, body, and headers", () => {
    const body: CreateUserRequest = {
      name: "morpheus",
      job: "leader",
    };

    cy.get("@apiConfig").then((apiConfig: any) => {
      UsersApiHelper.createUser(body, apiConfig.headers).then((resp) => {
        expect(resp.status).to.eq(201);
        expect(resp.body).to.have.property("name", body.name);
        expect(resp.body).to.have.property("job", body.job);
        expect(resp.body).to.have.property("id").to.not.be.empty;
      });
    });
  });
});
