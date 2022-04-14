import { Role } from "./role";

export class User {
    Username: string;
    Token: string;
    StatusCode: string;
    StatusMessage: string;
}
export class AuthenticationRequest {
    UserName: string;
    Password: string;
}
export class APIResponse {
    succeeded: string;
    message: string;
    errors: string;
    data: any;
}
export class TwoFactorResponse extends APIResponse {
    Email: string;
}
