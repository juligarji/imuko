import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationService = TestBed.get(NotificationService);
    expect(service).toBeTruthy();
  });

  // .............. CUSTOM TESTS   .............. 
  // ............................................

  it('simple alert should be created', () => {
    const service: NotificationService = TestBed.get(NotificationService);

    let alert = service.alert('Test title','Test subtitle','test message')

    expect(alert).toBeDefined()
  });

  it('loader should be created and contain the right message', () => {
    const service: NotificationService = TestBed.get(NotificationService);
    service.showLoader()
      .then(load =>{
          expect(load.message).toBe("Please wait ...")
      })
  });
  
});
