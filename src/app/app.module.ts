import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { TranslateStore, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';
import { RouterDispatcherComponent } from './components/router-dispatcher/router-dispatcher.component';

@NgModule({
	declarations: [
		AppComponent,
		RouterDispatcherComponent,
		
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		
		
		DesignAngularKitModule
	],
	providers: [
		TranslateStore,

	],
	bootstrap: [AppComponent]
})
export class AppModule { }
