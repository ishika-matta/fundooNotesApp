import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({

    imports: [
      MatButtonModule,
      MatInputModule,
      MatDividerModule,
      MatCardModule,
      MatIconModule,
      MatFormFieldModule,
      MatSidenavModule,
      MatListModule,
      MatToolbarModule,
      MatExpansionModule,
      MatChipsModule,
      TextFieldModule,
      MatTooltipModule,
      MatMenuModule,
      MatGridListModule,
      MatDialogModule,
      MatTabsModule,
      MatSnackBarModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatAutocompleteModule,
      MatRadioModule,
      MatStepperModule
    ],

    exports: [
      MatButtonModule,
      MatInputModule,
      MatDividerModule,
      MatCardModule,
      MatIconModule,
      MatFormFieldModule,
      MatSidenavModule,
      MatListModule,
      MatToolbarModule,
      MatExpansionModule,
      MatChipsModule,
      TextFieldModule,
      MatTooltipModule,
      MatMenuModule,
      MatGridListModule,
      MatDialogModule,
      MatTabsModule,
      MatSnackBarModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatAutocompleteModule,
      MatRadioModule,
      MatStepperModule
    ],

    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

  })
  export class AppMaterialModule { }

