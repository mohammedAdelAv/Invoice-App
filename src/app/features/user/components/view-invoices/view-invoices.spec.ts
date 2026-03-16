import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInvoices } from './view-invoices';

describe('ViewInvoices', () => {
  let component: ViewInvoices;
  let fixture: ComponentFixture<ViewInvoices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewInvoices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInvoices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
