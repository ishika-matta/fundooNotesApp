import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    
    imports: [
     
      MatButtonModule,
      MatInputModule,
      MatDividerModule,
      MatCardModule,
      MatIconModule,
      MatFormFieldModule,
      MatGridListModule
   
    ],

    exports: [
     
      MatButtonModule,
      MatInputModule,
      MatDividerModule,
      MatCardModule,
      MatIconModule,
      MatFormFieldModule,
      MatGridListModule
   
    ],
    
  })
  export class AppMaterialModule { }
  