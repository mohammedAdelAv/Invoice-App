import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesEmpty } from './invoices-empty';

describe('InvoicesEmpty', () => {
  let component: InvoicesEmpty;
  let fixture: ComponentFixture<InvoicesEmpty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicesEmpty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesEmpty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
