import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TakeNoteComponent } from './component/take-note/take-note.component';
// import { IconComponent } from './component/icon/icon.component';
import { DisplayComponent } from './component/display/display.component';
import { DialogCardComponent } from './component/dialog-card/dialog-card.component';
import { AuthGuard } from './component/auth.guard';
import { AuthService } from './services/authServices/auth.service';
// import { TrashComponent } from './component/trash/trash.component';
import { GotoNotesComponent } from './component/goto-notes/goto-notes.component';
import { GotoTrashComponent } from './component/goto-trash/goto-trash.component';
import { GotoArchiveComponent } from './component/goto-archive/goto-archive.component';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { LabelsComponent } from './component/labels/labels.component';
import { ReminderComponent } from './component/reminder/reminder.component';

const routes: Routes = [
  {path: '', redirectTo: '/register', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'resetpassword/:token', component: ResetPasswordComponent},
  {path: 'dailog-box', component: DialogBoxComponent},

  {path: '', component: DashboardComponent, canActivate: [AuthGuard],
  children: [
    {
      path: 'home', component: GotoNotesComponent
    },
    {
      path: 'trash', component: GotoTrashComponent
    },
    {
      path: 'archive', component: GotoArchiveComponent
    },
    {
      path: 'search-bar', component: SearchBarComponent
    },
    {
      path: 'labels/:label', component: LabelsComponent
    },
    {
      path: 'reminder', component: ReminderComponent
    }
   ]
},

  // {path: 'icon', component: IconComponent},
  // {path: 'dialog-card', component: DialogCardComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  // {path:'dash', component:DashComponent},

  {path: '**', redirectTo: '/register'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
