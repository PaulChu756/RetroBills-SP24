import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginPageComponent } from "./login/login.component";
import { SignupPage1Component } from "./signup/signup.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";
import { AccountRecoveryComponent } from "./account-recovery/account-recovery.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { BudgetPageComponent } from "./budget-page/budget-page.component";

import { AuthGuard } from "./auth/Auth.guard";
import { TransactionComponent } from "./transaction/transaction.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home/about', component: AboutComponent},
  {path: 'home/contact', component: ContactComponent},
  {path: 'login', component: LoginPageComponent },
  {path: 'signup', component: SignupPage1Component },
  {path: 'recovery', component: AccountRecoveryComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: '', redirectTo: 'home', pathMatch: "full"},
  
  {path: 'budget',component: BudgetPageComponent },
  {path: 'dashboard',component: DashboardComponent},
  {path: 'dashboard/:id',component: DashboardComponent, canActivate:[AuthGuard]},
  {path: '**', component: PageNotFoundComponent},

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
