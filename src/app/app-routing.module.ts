import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import {NotfoundComponent} from './components/404/404.component';
import {ArticulosComponent} from './components/articulos/articulos.component';
import {DocumentosComponent} from './components/documentos/documentos.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {AboutComponent} from './components/about/about.component';
import {PrivacyComponent} from './components/privacy/privacy.component';
import {TeamComponent} from './components/team/team.component';



const routes: Routes = [
{path:'',component:HomeComponent},
{path:'Articulos',component:ArticulosComponent},
{path:'Documentos',component:DocumentosComponent},
{path:'Contacto',component:ContactoComponent},
{path:'About',component:AboutComponent},
{path:'Privacidad',component:PrivacyComponent},
{path:'Equipo',component:TeamComponent},
{path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
