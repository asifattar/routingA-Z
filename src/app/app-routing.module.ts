import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './shared/components/dashbord/dashbord.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { ProductEditComponent } from './shared/components/products/product-edit/product-edit.component';
import { EditUserComponent } from './shared/components/users/edit-user/edit-user.component';
import { ProdFormComponent } from './shared/components/products/prod-form/prod-form.component';
import { AuthGuard } from './shared/services/auth.guard';
import { LogInComponent } from './shared/components/log-in/log-in.component';
import { SignupComponent } from './shared/components/signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  { path: 'sign-Up', component: SignupComponent },
  { path: 'home', component: DashbordComponent },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: ':id', component: ProductComponent },
      { path: ':id/edit', component: ProductEditComponent },
    ]
  },
  { path : 'addProd' , component : ProdFormComponent},
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: ":id", component: UserComponent },
      { path: ':id/edit', component: EditUserComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//    {
//     path : 'login' , component : LogInComponent , 
//    },
//    {
//     path : 'sign-Up', component : SignupComponent
//    },

   
//   {
//     path: 'home', component: DashbordComponent
//   },
//   {
//     path: 'products', component: ProductsComponent, canActivate : [AuthGuard] ,
//     children: [
//       { path: ':id', component: ProductComponent },
//       { path: ':id/edit', component: ProductEditComponent },
//     ]
//   },
//   {path : 'addProd' , component : ProdFormComponent},
//   // {
//   //   path: 'products/:id', component: ProductComponent
//   // },
//   // {
//   //   path: 'products/:id/edit', component: ProductEditComponent
//   // },
//   {
//     path: 'users', component: UsersComponent , canActivate : [AuthGuard] ,
//     children : [
//       {path : ":id" , component : UserComponent},
//       {path : ':id/edit' , component : EditUserComponent},
//     ]
//   },
//   // {
//   //   path: 'users/:id', component: UserComponent
//   // },
//   // {
//   //   path: 'users/:id/edit', component: EditUserComponent
//   // },
//   {
//     path: '**', component: PageNotFoundComponent
//   }

// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
