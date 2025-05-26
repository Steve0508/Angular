import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectiveNgstyleComponent } from './attribute-directive-ngstyle.component';

describe('AttributeDirectiveNgstyleComponent', () => {
  let component: AttributeDirectiveNgstyleComponent;
  let fixture: ComponentFixture<AttributeDirectiveNgstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeDirectiveNgstyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeDirectiveNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
