import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AfternoonProgramPage } from './afternoon-program.page';

describe('AfternoonProgramPage', () => {
  let component: AfternoonProgramPage;
  let fixture: ComponentFixture<AfternoonProgramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfternoonProgramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AfternoonProgramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
