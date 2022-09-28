import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'AppAcad',
    pathMatch: 'full'
  },
  {
    path: 'AppAcad',
    loadChildren: () => import('./paginas/app-acad01/app-acad01.module').then(m => m.AppAcad01PageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./paginas/notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'financeiro',
    loadChildren: () => import('./paginas/financeiro/financeiro.module').then( m => m.FinanceiroPageModule)
  },
  {
    path: 'dadospessoais',
    loadChildren: () => import('./paginas/dadospessoais/dadospessoais.module').then( m => m.DadospessoaisPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
