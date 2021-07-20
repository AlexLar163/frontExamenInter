import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContenedorComponent } from './contenedor/contenedor.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ContenedorComponent
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule
  ]
})
export class ContainerModule { }
