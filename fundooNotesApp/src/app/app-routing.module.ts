import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TakeNoteComponent } from './component/take-note/take-note.component';
import { IconComponent } from './component/icon/icon.component';
import { DisplayComponent } from './component/display/display.component';
import { DialogCardComponent } from './component/dialog-card/dialog-card.component';
import { AuthGuard } from './component/auth.guard';
import { AuthService } from './services/auth.service';
import { DashComponent } from './component/dash/dash.component';

const routes: Routes = [
  {path:'', redirectTo:'/register', pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'forgotPassword', component:ForgotPasswordComponent},
  {path:'resetpassword/:token', component:ResetPasswordComponent},
  {path:'dashboard', component:DashboardComponent,canActivate: [AuthGuard]},
  {path:'take-note', component:TakeNoteComponent},
  {path:'icon', component:IconComponent},
  {path:'display-content', component:DisplayComponent},
  {path:'dialog-card', component:DialogCardComponent},
  {path:'page-not-found', component:PageNotFoundComponent},
  {path:'dash', component:DashComponent},
  
  {path:'**', redirectTo:'/register'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
