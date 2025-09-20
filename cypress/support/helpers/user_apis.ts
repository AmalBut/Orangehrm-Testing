import { CreateNewUserRequest } from "../interfaces/create_user_request";
import { CreateNewUserResponse } from "../interfaces/create_user_response";


export const USERS_API_URL = 'https://reqres.in/api/users';

export class UsersApiHelper {
  static createUser(
    body: CreateNewUserRequest,
    headers: { [key: string]: string }
  ): Cypress.Chainable<Cypress.Response<CreateNewUserResponse>> {
    return cy.createUserApi<CreateNewUserResponse>('POST', USERS_API_URL, body, headers);
  }
}