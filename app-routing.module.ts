import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Import LoginComponent

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route to the LoginComponent
  { path: 'login', component: LoginComponent }, // Add a route for the LoginComponent
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
