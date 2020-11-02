/*tslint:disable*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {BaseRequest} from './BaseRequest';
import {DiggiTaskSearchRequest} from './dto/DiggiTaskSearchRequest.g';
import {ShortDiggiTaskDto} from './dto/ShortDiggiTaskDto.g';
import {PagedResult} from './dto/PagedResult.g';
import {DiggiTaskAddMeRequest} from './dto/DiggiTaskAddMeRequest.g';
import {DiggiTaskDto} from './dto/DiggiTaskDto.g';
import {DiggiTaskSolveRequest} from './dto/DiggiTaskSolveRequest.g';
import {AdminCreateTaskRequest} from './dto/AdminCreateTaskRequest.g';
import {DiggiTasksContexts} from './dto/DiggiTasksContexts.g';

@Injectable()
export class AdminDiggiTaskApiRequest extends BaseRequest {

  constructor(http: HttpClient) {
    super(http);
  }

  search(request: DiggiTaskSearchRequest): Promise<PagedResult<ShortDiggiTaskDto>> {
    const requestObj = new HttpRequest('POST', `api/admin/task/search`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  addMe(request: DiggiTaskAddMeRequest): Promise<ShortDiggiTaskDto> {
    const requestObj = new HttpRequest('POST', `api/admin/task/addMe`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  getById(id: string): Promise<DiggiTaskDto> {
    const requestObj = new HttpRequest('GET', `api/admin/task/${id}`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  solve(request: DiggiTaskSolveRequest): Promise<ShortDiggiTaskDto> {
    const requestObj = new HttpRequest('POST', `api/admin/task/solve`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  create(request: AdminCreateTaskRequest): Promise<ShortDiggiTaskDto> {
    const requestObj = new HttpRequest('POST', `api/admin/task/create`, request, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));
    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

  generatorTasksFix(): Promise<DiggiTasksContexts> {
    const requestObj = new HttpRequest('GET', `api/admin/task`, Object.assign({
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    }));

    return this.fetch(requestObj)
    .then((response) => response)
    .catch(BaseRequest.handleError);
  }

}