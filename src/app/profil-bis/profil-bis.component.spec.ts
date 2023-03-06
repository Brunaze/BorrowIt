import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilBisComponent } from './profil-bis.component';

describe('ProfilBisComponent', () => {
  let component: ProfilBisComponent;
  let fixture: ComponentFixture<ProfilBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilBisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
