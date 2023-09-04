import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mision-detail/:seq',
    loadChildren: () => import('./mision/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'prs-detail/:seq',
    loadChildren: () => import('./mision/prs-detail/prs-detail.module').then( m => m.PrsDetailPageModule)
  },
  {
    path: 'coupon-detail/:seq',
    loadChildren: () => import('./coupon/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'point',
    loadChildren: () => import('./my/point/point.module').then( m => m.PointPageModule)
  },
  {
    path: 'coupon',
    loadChildren: () => import('./my/coupon/coupon.module').then( m => m.CouponPageModule)
  },
  {
    path: 'coupon-code',
    loadChildren: () => import('./my/coupon-code/coupon-code.module').then( m => m.CouponCodePageModule)
  },
  {
    path: 'withdraw',
    loadChildren: () => import('./my/withdraw/withdraw.module').then( m => m.WithdrawPageModule)
  },
  {
    path: 'withdraw-list',
    loadChildren: () => import('./my/withdraw-list/withdraw-list.module').then( m => m.WithdrawListPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./my/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./my/policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'quit',
    loadChildren: () => import('./my/quit/quit.module').then( m => m.QuitPageModule)
  },
  {
    path: 'complete',
    loadChildren: () => import('./join/complete/complete.module').then( m => m.CompletePageModule)
  },
  {
    path: 'tos',
    loadChildren: () => import('./join/tos/tos.module').then( m => m.TosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./join/login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
