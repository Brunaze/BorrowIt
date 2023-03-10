import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierObjetComponent } from './modifier-objet.component';

describe('ModifierObjetComponent', () => {
  let component: ModifierObjetComponent;
  let fixture: ComponentFixture<ModifierObjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierObjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierObjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
