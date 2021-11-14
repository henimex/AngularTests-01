import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DirectiveUsageComponent} from './Examples/L07-Directives/directive-usage/directive-usage.component';
import {BasicHighlightDirective} from './Examples/L07-Directives/directive-usage/CustomDirectives/basic-highlight.directive';
import {BetterHighlightDirective} from './Examples/L07-Directives/directive-usage/CustomDirectives/better-highlight.directive';
import {UnlessDirective} from './Examples/L07-Directives/directive-usage/CustomDirectives/unless.directive';
import {ModuleServicesComponent} from './Examples/L09-ModuleInjections/module-services/module-services.component';
import {NewAccountComponent} from './Examples/L09-ModuleInjections/new-account/new-account.component';
import {AccountComponent} from './Examples/L09-ModuleInjections/account/account.component';
import {FormsModule} from '@angular/forms';
import {AccountService} from './Examples/L09-ModuleInjections/services/account.service';
import {LoggingService} from './Examples/L09-ModuleInjections/services/logging.service';
import {HomeComponent} from './Examples/L11-Routing/home/home.component';
import {ServersComponent} from './Examples/L11-Routing/servers/servers.component';
import {UsersComponent} from './Examples/L11-Routing/users/users.component';
import {RoutingUsageComponent} from './Examples/L11-Routing/routing-usage/routing-usage.component';
import {EditServerComponent} from './Examples/L11-Routing/servers/edit-server/edit-server.component';
import {ServerComponent} from './Examples/L11-Routing/servers/server/server.component';
import {UserComponent} from './Examples/L11-Routing/users/user/user.component';
import {ServersService} from './Examples/L11-Routing/servers/servers.service';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveUsageComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    ModuleServicesComponent,
    NewAccountComponent,
    AccountComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    RoutingUsageComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AccountService, LoggingService, ServersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
