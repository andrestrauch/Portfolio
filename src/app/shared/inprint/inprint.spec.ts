import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Inprint } from './inprint';

describe('Inprint', () => {
  let component: Inprint;
  let fixture: ComponentFixture<Inprint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inprint],
    }).compileComponents();

    fixture = TestBed.createComponent(Inprint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
