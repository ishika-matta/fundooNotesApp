import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/dataServices/data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(@Inject(MatDialog) public dialog: MatDialog) { }

  ngOnInit() {
  }

  openProductDialog(choice){
    console.log('here');
    this.dialog.open(ProductDialogComponent, {
    data: {
    type: choice
    }, width: '600px'
    });
    }
}
