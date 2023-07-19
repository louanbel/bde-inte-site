import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { IntegrationComponent } from './views/integration/integration.component';
import { CampusComponent } from './views/campus/campus.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'integration', component: IntegrationComponent },
  { path: 'campus', component: CampusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
