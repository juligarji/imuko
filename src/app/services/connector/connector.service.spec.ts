import { TestBed } from '@angular/core/testing';

import { ConnectorService } from './connector.service';
import { HttpClientModule,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('ConnectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: ConnectorService = TestBed.get(ConnectorService);
    expect(service).toBeTruthy();
  });

  
  // .............. CUSTOM TESTS   .............. 
  // ............................................

  it('The get call should respond correctly.', () => {
    const service: ConnectorService = TestBed.get(ConnectorService);

    service.unprotected('get',new Headers(),'https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(response =>{
        expect(response.userId).toBe(1)
      })
  });

  it('The post call should respond correctly.', () => {
    const service: ConnectorService = TestBed.get(ConnectorService);

    service.unprotected('post',{},'https://jsonplaceholder.typicode.com/todos/1',{
        test: 'true'
    })
      .subscribe(response =>{
        expect(response.test).toBe('true')
      })
  });

  it('The put call should respond correctly.', () => {
    const service: ConnectorService = TestBed.get(ConnectorService);

    service.unprotected('post',{},'https://jsonplaceholder.typicode.com/todos/1',{
        key: 201
    })
      .subscribe(response =>{
        expect(response.key).toBe('201')
      })
  });

  it('The put call should respond correctly.', () => {
    const service: ConnectorService = TestBed.get(ConnectorService);

    service.unprotected('delete',{},'https://jsonplaceholder.typicode.com/todos/1',{
        key: 201
    })
      .subscribe(response =>{
        expect(response).toBeDefined()
      })
  });

  it('The put call should respond correctly.', () => {
    const service: ConnectorService = TestBed.get(ConnectorService);

    service.unprotected('delete',{},'https://uridoesnotexist.com',{
        key: 201
    }).subscribe(response =>{},err =>{
        expect(err).toBeDefined()
      })
  });

  
                      
                       





});
