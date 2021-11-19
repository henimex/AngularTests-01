import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './Examples/L11-Routing/users/users.component';
import {HomeComponent} from './Examples/L11-Routing/home/home.component';
import {ServersComponent} from './Examples/L11-Routing/servers/servers.component';
import {UserComponent} from './Examples/L11-Routing/users/user/user.component';
import {EditServerComponent} from './Examples/L11-Routing/servers/edit-server/edit-server.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'servers', component: ServersComponent},
  {path: 'servers/:id/edit', component: EditServerComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id/:name', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
