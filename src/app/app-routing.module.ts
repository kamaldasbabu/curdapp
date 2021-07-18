import { CalculatorComponent } from './calculator/calculator.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'postcreate', component: PostCreateComponent},
  { path: 'postlist', component: PostlistComponent},
  { path: 'calc', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
