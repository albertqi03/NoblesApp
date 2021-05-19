import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyResPage } from './my-res.page';

describe('MyResPage', () => {
  let component: MyResPage;
  let fixture: ComponentFixture<MyResPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyResPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyResPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
