import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdpopcornDetailPage } from './adpopcorn-detail.page';

describe('AdpopcornDetailPage', () => {
  let component: AdpopcornDetailPage;
  let fixture: ComponentFixture<AdpopcornDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdpopcornDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
