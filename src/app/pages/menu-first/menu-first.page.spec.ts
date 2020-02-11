import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuFirstPage } from './menu-first.page';

describe('MenuFirstPage', () => {
  let component: MenuFirstPage;
  let fixture: ComponentFixture<MenuFirstPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFirstPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuFirstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
