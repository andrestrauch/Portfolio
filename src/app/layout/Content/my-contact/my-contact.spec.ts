import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyContact } from './my-contact';

describe('MyContact', () => {
  let component: MyContact;
  let fixture: ComponentFixture<MyContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyContact],
    }).compileComponents();

    fixture = TestBed.createComponent(MyContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
