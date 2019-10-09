import  'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AppMaterialModule } from './angular-material/app.material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { ConnectService } from '../app/services/connect.service';
import { HttpService } from './services/http.service';
import { UserService } from './services/user.service';
import { NoteService } from './services/note.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TakeNoteComponent } from './component/take-note/take-note.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { IconComponent } from './component/icon/icon.component';
import { DisplayComponent } from './component/display/display.component';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { DialogCardComponent } from './component/dialog-card/dialog-card.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './component/auth.guard';
import { TrashComponent } from './component/trash/trash.component';
import { GotoNotesComponent } from './component/goto-notes/goto-notes.component';
import { GotoTrashComponent } from './component/goto-trash/goto-trash.component';
import { GotoArchiveComponent } from './component/goto-archive/goto-archive.component';
import { ArchiveComponent } from './component/archive/archive.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    TakeNoteComponent,
    IconComponent,
    DisplayComponent,
    DialogCardComponent,
    TrashComponent,
    GotoNotesComponent,
    GotoTrashComponent,
    GotoArchiveComponent,
    ArchiveComponent,

  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule


  ],
  providers: [
    ConnectService,
    AuthGuard,
    AuthService,
    HttpService,
    UserService,
    NoteService
  ],
  entryComponents: [DialogCardComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
