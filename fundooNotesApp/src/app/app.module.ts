import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
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
import { HttpService } from './services/httpServices/http.service';
import { UserService } from './services/userServices/user.service';
import { NoteService } from './services/noteServices/note.service';
import { ProductCartService } from './services/productCartServices/product-cart.service';
import { NoteLabelService } from './services/noteLabelServices/note-label.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TakeNoteComponent } from './component/take-note/take-note.component';
import { ColorPickerModule } from 'ngx-color-picker';
// import { IconComponent } from './component/icon/icon.component';
import { DisplayComponent } from './component/display/display.component';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatDatepickerModule } from '@angular/material';
import { DialogCardComponent } from './component/dialog-card/dialog-card.component';
import { AuthService } from './services/authServices/auth.service';
import { AuthGuard } from './component/auth.guard';
import { TrashComponent } from './component/trash/trash.component';
import { GotoNotesComponent } from './component/goto-notes/goto-notes.component';
import { GotoTrashComponent } from './component/goto-trash/goto-trash.component';
import { GotoArchiveComponent } from './component/goto-archive/goto-archive.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { IconTrayComponent } from './component/icon-tray/icon-tray.component';
import { MoreMenuComponent } from './component/more-menu/more-menu.component';
import { RemindMeComponent } from './component/remind-me/remind-me.component';
import { CollaboratorComponent } from './component/collaborator/collaborator.component';
import { ChangeColorComponent } from './component/change-color/change-color.component';
import { AddImageComponent } from './component/add-image/add-image.component';
import { ArchiveUnComponent } from './component/archive-un/archive-un.component';
import { UploadProfilePicComponent } from './component/upload-profile-pic/upload-profile-pic.component';
import { ImageModule } from 'ngx-image';
import { ImageCropperModule } from 'ngx-image-cropper';
import { UnArchiveComponent } from './component/un-archive/un-archive.component';
import { SearchPipe } from './pipe/search.pipe';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AutosizeModule } from 'ngx-autosize';
import { LabelsComponent } from './component/labels/labels.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { CollabDialogBoxComponent } from './component/collab-dialog-box/collab-dialog-box.component';
import { QuestionAnswerComponent } from './component/question-answer/question-answer.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { CardComponent } from './component/card/card.component';
import { CartComponent } from './component/cart/cart.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProductDialogComponent } from './component/product-dialog/product-dialog.component';


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
    DisplayComponent,
    DialogCardComponent,
    TrashComponent,
    GotoNotesComponent,
    GotoTrashComponent,
    GotoArchiveComponent,
    ArchiveComponent,
    DialogBoxComponent,
    IconTrayComponent,
    MoreMenuComponent,
    RemindMeComponent,
    CollaboratorComponent,
    ChangeColorComponent,
    AddImageComponent,
    ArchiveUnComponent,
    UploadProfilePicComponent,
    UnArchiveComponent,
    SearchPipe,
    SearchBarComponent,
    LabelsComponent,
    ReminderComponent,
    CollabDialogBoxComponent,
    QuestionAnswerComponent,
    CardComponent,
    CartComponent,
    ProductDialogComponent,
   
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
    MatIconModule,
    ImageModule,
    ImageCropperModule,
    MatTabsModule,
    AutosizeModule,
    MatTooltipModule,
    MatDatepickerModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    
  ],

  providers: [
    AuthGuard,
    AuthService,
    HttpService,
    UserService,
    NoteService,
    NoteLabelService,
    ProductCartService,
    MatDatepickerModule
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [ DialogCardComponent, UploadProfilePicComponent, CollabDialogBoxComponent,
    ProductDialogComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
