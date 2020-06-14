import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KlientEditPage } from './klient-edit.page';

describe('KlientEditPage', () => {
  let component: KlientEditPage;
  let fixture: ComponentFixture<KlientEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlientEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KlientEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
