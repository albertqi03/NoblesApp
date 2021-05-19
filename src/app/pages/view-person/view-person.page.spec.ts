import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewPersonPage } from './view-person.page';

describe('ViewPersonPage', () => {
  let component: ViewPersonPage;
  let fixture: ComponentFixture<ViewPersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPersonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
