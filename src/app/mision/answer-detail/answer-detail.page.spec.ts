import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnswerDetailPage } from './answer-detail.page';

describe('AnswerDetailPage', () => {
  let component: AnswerDetailPage;
  let fixture: ComponentFixture<AnswerDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnswerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
