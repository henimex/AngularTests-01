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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AccountService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
