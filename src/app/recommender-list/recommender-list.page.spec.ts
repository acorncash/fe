import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommenderListPage } from './recommender-list.page';

describe('RecommenderListPage', () => {
  let component: RecommenderListPage;
  let fixture: ComponentFixture<RecommenderListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecommenderListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
