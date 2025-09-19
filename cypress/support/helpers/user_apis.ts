import { CreateUserRequest } from "../interfaces/create_user_request";
import { CreateUserResponse } from "../interfaces/create_user_response";


export const USERS_API_URL = 'https://reqres.in/api/users';

export class UsersApiHelper {
  static createUser(
    body: CreateUserRequest,
    headers: { [key: string]: string }
  ): Cypress.Chainable<Cypress.Response<CreateUserResponse>> {
    return cy.createUserApi<CreateUserResponse>('POST', USERS_API_URL, body, headers);
  }
}