import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrsDetailPage } from './prs-detail.page';

describe('PrsDetailPage', () => {
  let component: PrsDetailPage;
  let fixture: ComponentFixture<PrsDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
