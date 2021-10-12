import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
 { path: 'pokemons', component: ListComponent },
 { path: 'pokemons/:id', component: ViewComponent },
 { path: '', pathMatch: 'full', redirectTo: 'pokemons' },
 { path: '**', pathMatch: 'full', redirectTo: 'pokemons' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
