import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaptureDetailPage } from './capture-detail.page';

describe('CaptureDetailPage', () => {
  let component: CaptureDetailPage;
  let fixture: ComponentFixture<CaptureDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaptureDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
