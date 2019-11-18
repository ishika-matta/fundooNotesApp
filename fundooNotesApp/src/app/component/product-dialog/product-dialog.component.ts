import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CartComponent } from '../cart/cart.component';
import { DataService } from 'src/app/services/dataServices/data.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit {

  constructor(private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CartComponent>,
    private dataService: DataService) { }

  ngOnInit() {
  }

  onProceed(pack) {
    this.dialogRef.close();
    this.dataService.changeMessage(pack);
    this.router.navigate(["/register"]);
  }
  
  onClose() {
    this.dialogRef.close();
  }

}
