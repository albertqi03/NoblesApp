import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoblemanPage } from './nobleman.page';

describe('NoblemanPage', () => {
  let component: NoblemanPage;
  let fixture: ComponentFixture<NoblemanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoblemanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoblemanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
