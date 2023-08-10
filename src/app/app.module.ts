import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateStore } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';

import { TableOfContentComponent } from './components/table-of-content/table-of-content.component';
import { TableOfContentItemComponent } from './components/table-of-content-item/table-of-content-item.component';
import { LinkSortPipe } from './pipe/link-sort.pipe';

@NgModule({
	declarations: [
		AppComponent,
		
		TableOfContentComponent,
    	TableOfContentItemComponent,
		LinkSortPipe,
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
