import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'edit_info', component: EditInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
