import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestPage } from './forest.page';

describe('ForestPage', () => {
  let component: ForestPage;
  let fixture: ComponentFixture<ForestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
