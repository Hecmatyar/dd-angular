import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';

@Injectable()
export abstract class BaseRequest {
  protected static httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    }),
  };

  protected constructor(protected http: HttpClient) {
  }

  // tslint:disable:no-any
  static handleError = (error: any): Promise<any> => {
    return Promise.reject(error.message || error);
  };

  async fetch(request: HttpRequest<any>): Promise<any> {

    const options = {
      body: request.body,
      headers: request.headers
    };

    // console.log("base", this.http.request<any>(request.method, request.url, options).toPromise<HttpResponse<any>>());
    // this.http.request<any>(request.method, request.url, options).subscribe(value => console.log('base value', value));

    return await this.http.request<any>(request.method, request.url, options).toPromise<HttpResponse<any>>();

    // const options: RequestInit = {
    //   headers: BaseRequest.httpOptions.headers,
    //   method: request.method
    // };
    // if (request.body) {
    //   options.body = JSON.stringify(request.body);
    // }
    //
    // const response = await fetch(request.url, options);
    // if (response.status == 401) {
    //   CookieService.deleteCookie("access_token");
    //   throw response;
    // } else if (!response.status || response.status < 200 || response.status >= 300) {
    //   throw await response.json();
    // }
    //
    // return response;
  }

  protected q(params: { [key: string]: any }): string {

    return this.getObjectFlatter()(params);
    // const query = Object.keys(params)
    //   .filter(k => params[k] != null)
    //   .map(k => `${k}=${encodeURIComponent(params[k].toString())}`)
    //   .join("&");
    //
    // return query ? `?${query}` : "";
  }

  getObjectFlatter(): (param1: any, param2?: string) => string {
    const flatObject: any = {};
    const testMap = new Map<string, any>();
    let i = 0;

    return function objectToFlat(node: any, parentName?: string): string {
      const queryArgs: string[] = [];
      parentName = parentName ? parentName : "";

      if (node instanceof Object) {
        for (const subNodeName in node) {
          if (node[subNodeName] instanceof Object) {
            objectToFlat(node[subNodeName], subNodeName);
          } else {
            const newNodeValue = node[subNodeName];
            let fixedSubNodeName = "." + subNodeName;

            if (typeof subNodeName === "number" || (typeof subNodeName === "string" && !isNaN(Number(subNodeName)))) {
              fixedSubNodeName = "";
            }

            const newNodeName = parentName === "" ? subNodeName : parentName + fixedSubNodeName;

            if (newNodeValue) {
              testMap.set(i.toString(), {keyObject: newNodeName, valueObject: newNodeValue});
              i++;
              flatObject[newNodeName] = newNodeValue;
            }
          }
        }
      }

      testMap.forEach(item => queryArgs.push(item.keyObject + "=" + item.valueObject));

      const query = queryArgs.join("&");

      return query ? `?${query}` : "";
    };
  }
}
