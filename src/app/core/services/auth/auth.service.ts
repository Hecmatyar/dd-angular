import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AdminAuthenticationApiRequest} from "../../../api/AdminAuthenticationApiRequest.g";
import {AdminAuthenticationRequest} from "../../../api/dto/AdminAuthenticationRequest.g";
import {AccessLevel} from "../../../api/dto/AccessLevel.g";

@Injectable()
export class AuthService extends AdminAuthenticationApiRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  singIn(request: AdminAuthenticationRequest): Promise<void> {
    return this.login(request);
  }

  singOut(): Promise<void> {
    return this.logout();
  }

  getAccessLevelMap(): Promise<AccessLevel[]> {
    return this.accessLevels();
  }
}
