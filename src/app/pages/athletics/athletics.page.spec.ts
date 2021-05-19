import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AthleticsPage } from './athletics.page';

describe('AthleticsPage', () => {
  let component: AthleticsPage;
  let fixture: ComponentFixture<AthleticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleticsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AthleticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
