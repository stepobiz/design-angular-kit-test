import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateStore } from '@ngx-translate/core';

import { DesignAngularKitModule, ItComponentsModule } from 'projects/design-angular-kit/src/public_api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/main/main.component';

import { TableOfContentComponent } from './components/table-of-content/table-of-content.component';
import { TableOfContentItemComponent } from './components/table-of-content-item/table-of-content-item.component';
import { LinkSortPipe } from './pipe/link-sort.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		
		DesignAngularKitModule,
		BrowserAnimationsModule,
		ItComponentsModule,
	],
	providers: [
		TranslateStore,

	],
	declarations: [
		AppComponent,
		
		TableOfContentComponent,
    	TableOfContentItemComponent,
		LinkSortPipe,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
