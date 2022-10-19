import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { CartPageComponent } from './component/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './component/pages/checkout-page/checkout-page.component';
import { FoodPageComponent } from './component/pages/food-page/food-page.component';
import { HomeComponent } from './component/pages/home/home.component';
import { LoginPageComponent } from './component/pages/login-page/login-page.component';
import { OrderTrackPageComponent } from './component/pages/order-track-page/order-track-page.component';
import { PaymentPageComponent } from './component/pages/payment-page/payment-page.component';
import { RegisterPageComponent } from './component/pages/register-page/register-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'payment',
    component: PaymentPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'track/:orderId',
    component: OrderTrackPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
