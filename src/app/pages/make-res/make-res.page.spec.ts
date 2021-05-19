import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeResPage } from './make-res.page';

describe('MakeResPage', () => {
  let component: MakeResPage;
  let fixture: ComponentFixture<MakeResPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeResPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeResPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
