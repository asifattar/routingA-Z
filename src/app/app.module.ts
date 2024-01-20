import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { DashbordComponent } from './shared/components/dashbord/dashbord.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductEditComponent } from './shared/components/products/product-edit/product-edit.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './shared/components/users/edit-user/edit-user.component';
import { ProdFormComponent } from './shared/components/products/prod-form/prod-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    UsersComponent,
    DashbordComponent,
    FooterComponent,
    PageNotFoundComponent,
    UserComponent,
    ProductComponent,
    ProductEditComponent,
    EditUserComponent,
    ProdFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
