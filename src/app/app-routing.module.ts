import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'info', pathMatch: 'full' },
	{
		path: 'info',
		//component: RouterDispatcherComponent,
		children: [
			{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
			{ path: 'welcome', loadChildren: () => import('src/app/modules/welcome/welcome.module').then(m => m.WelcomeModule) }
		]
	},
	{
		path: 'componenti',
		//component: RouterDispatcherComponent,
		children: [
			{ path: '', redirectTo: 'lang', pathMatch: 'full' },
			//{ path: 'lang', loadChildren: () => import('src/app/modules/language-switcher/language-switcher.module').then(m => m.LanguageSwitcherModule) },
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
