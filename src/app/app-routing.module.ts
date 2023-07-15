import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { IntegrationComponent } from './views/integration/integration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'integration', component: IntegrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
