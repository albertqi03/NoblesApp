import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalendarModalPage } from './calendar-modal.page';

describe('CalendarModalPage', () => {
  let component: CalendarModalPage;
  let fixture: ComponentFixture<CalendarModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
