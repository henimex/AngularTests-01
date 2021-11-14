import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './Examples/L11-Routing/users/users.component';
import {HomeComponent} from './Examples/L11-Routing/home/home.component';
import {ServersComponent} from './Examples/L11-Routing/servers/servers.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'servers', component: ServersComponent},
  {path: 'users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
