export class CookieService {
  static getCookie(name: string): string {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length == 2) {
      return parts.pop().split(";").shift();
    }
  }

  static deleteCookie(name: string): void {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
}
