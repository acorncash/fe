import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuitPage } from './quit.page';

describe('QuitPage', () => {
  let component: QuitPage;
  let fixture: ComponentFixture<QuitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
