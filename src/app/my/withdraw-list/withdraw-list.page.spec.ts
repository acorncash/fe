import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WithdrawListPage } from './withdraw-list.page';

describe('WithdrawListPage', () => {
  let component: WithdrawListPage;
  let fixture: ComponentFixture<WithdrawListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WithdrawListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
