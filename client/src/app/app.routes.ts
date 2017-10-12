import { AssociadoComponent } from './views/associado/associado/associado.component';
import { ChequinhoComponent } from './views/chequinho/chequinho.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { UserComponent } from './views/user/user.component';
import { BlankComponent } from './common/layouts/blank/blank.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { BasicComponent } from './common/layouts/basic/basic.component';
import { Routes } from "@angular/router";
import { ConveniadoComponent } from 'app/views/conveniado/conveniado.component';
import { TipoconveniadoComponent } from 'app/views/tipoconveniado/tipoconveniado.component';


export const ROUTES: Routes = [
	// Main redirect
	{ path: '', redirectTo: 'home', pathMatch: 'full' },

	// App views
	{
		path: '', component: BasicComponent,
		children: [
			{ path: 'home', component: HomeComponent },
			{ path: 'user', component: UserComponent },
			{ path: 'categoria', component: CategoriaComponent },
			{ path: 'chequinho', component: ChequinhoComponent },
			{ path: 'associado', component: AssociadoComponent },
			{ path: 'conveniado', component: ConveniadoComponent },
			{ path: 'tipoconveniado', component: TipoconveniadoComponent }
		]
	},
	{
		path: '', component: BlankComponent,
		children: [
			{ path: 'login', component: LoginComponent }
		]
	},

	{ path: '**', component: LoginComponent }
];