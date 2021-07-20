import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/container/register/register.component';
import { ListComponent } from './components/list/list.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/container',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'info',
        component: InfoComponent,
      },
    ],
  },
  {
    path: 'container',
    // component: RegisterComponent
    loadChildren: () =>
      import('./components/container/container.module').then(
        (m) => m.ContainerModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
