import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { TextFieldModule } from '@angular/cdk/text-field';
import {MatTooltipModule} from '@angular/material/tooltip';


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
      MatTooltipModule
      
   
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
      MatTooltipModule
      
   
    ],
    
  })
  export class AppMaterialModule { }
  