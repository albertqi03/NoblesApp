import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuSecondPage } from './menu-second.page';

describe('MenuSecondPage', () => {
  let component: MenuSecondPage;
  let fixture: ComponentFixture<MenuSecondPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSecondPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuSecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
