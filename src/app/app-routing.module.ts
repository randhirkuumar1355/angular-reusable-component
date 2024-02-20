import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { FilterComponent } from './widgets/filter/filter.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRouting = [HeaderComponent, FooterComponent, EmployeesComponent, FilterComponent,  PageNotFoundComponent] 
