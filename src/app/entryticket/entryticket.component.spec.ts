import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryticketComponent } from './entryticket.component';

describe('EntryticketComponent', () => {
  let component: EntryticketComponent;
  let fixture: ComponentFixture<EntryticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
