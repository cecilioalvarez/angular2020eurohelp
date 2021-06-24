import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevoLibrosComponent } from './formulario-nuevo-libros.component';

describe('FormularioNuevoLibrosComponent', () => {
  let component: FormularioNuevoLibrosComponent;
  let fixture: ComponentFixture<FormularioNuevoLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNuevoLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNuevoLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
