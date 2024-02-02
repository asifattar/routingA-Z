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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './shared/components/users/edit-user/edit-user.component';
import { ProdFormComponent } from './shared/components/products/prod-form/prod-form.component';
import { LogInComponent } from './shared/components/log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from './shared/components/signup/signup.component';
import { AngularFireModule } from '@angular/fire/compat'
// import { environment } from 'src/environments/environment';
import { environment } from '../environments/environment';
import { Environment } from './shared/interface/iproduct';





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
    LogInComponent,
    SignupComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule.initializeApp((environment as Environment).firebase),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
