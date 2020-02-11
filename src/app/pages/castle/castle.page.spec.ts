import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CastlePage } from './castle.page';

describe('CastlePage', () => {
  let component: CastlePage;
  let fixture: ComponentFixture<CastlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CastlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
