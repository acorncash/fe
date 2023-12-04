import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommenderPage } from './recommender.page';

describe('RecommenderPage', () => {
  let component: RecommenderPage;
  let fixture: ComponentFixture<RecommenderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecommenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
