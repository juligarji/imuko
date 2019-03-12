import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanPage } from './ocean.page';

describe('OceanPage', () => {
  let component: OceanPage;
  let fixture: ComponentFixture<OceanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
