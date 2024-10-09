import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SonidosPage } from './sonidos.page';

describe('SonidosPage', () => {
  let component: SonidosPage;
  let fixture: ComponentFixture<SonidosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SonidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
