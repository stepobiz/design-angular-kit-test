import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterDispatcherComponent } from './components/router-dispatcher/router-dispatcher.component';

const routes: Routes = [
	{ path: '', redirectTo: 'info', pathMatch: 'full' },
	{
		path: 'info',
		component: RouterDispatcherComponent,
		children: [
			{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
			{ path: 'welcome', loadChildren: () => import('src/app/modules/welcome/welcome.module').then(m => m.WelcomeModule) }
		]
	},
	{
		path: 'componenti',
		component: RouterDispatcherComponent,
		children: [
			{ path: '', redirectTo: 'badge', pathMatch: 'full' },
			//{ path: 'badge', loadChildren: () => import('src/app/modules/badge/badge.module').then(m => m.BadgeModule) },
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
