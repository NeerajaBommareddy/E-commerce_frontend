import { OrdersComponent } from './orders/orders.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CartComponent } from './cart/cart.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

import { UserPageComponent } from './user-page/user-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { ProductsComponent } from './products/products.component';

import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder } from '@angular/forms';

const routes: Routes = [
    
   {path:'',redirectTo:'/home',pathMatch: 'full'},
   {path: 'home',component:HomeComponent},

   {path:'products',component:ProductsComponent},
   {path:'login',component:LoginPageComponent},
   {path:'Admin/:id',component:AdminManageComponent},
   {path:'User/:id',component:UserPageComponent},
   {path:'register',component:RegistrationComponent},
   {path:'editCategory/:adminId/:categoryId',component:EditCategoryComponent},
   {path:'addCategory/:adminId',component:AddCategoryComponent},
   {path:'editProduct/:adminId/:productId',component:EditProductComponent},
   {path:'addProduct/:adminId',component:AddProductComponent},
   {path:'addAddress/:role/:id',component:AddAddressComponent},
   {path:'cart/User/:id',component:CartComponent},
   {path:'forgotPassword',component:ForgotPasswordComponent},
   {path:'orders/:id',component:OrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
