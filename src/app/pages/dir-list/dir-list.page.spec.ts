import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DirListPage } from './dir-list.page';

describe('DirListPage', () => {
  let component: DirListPage;
  let fixture: ComponentFixture<DirListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DirListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
