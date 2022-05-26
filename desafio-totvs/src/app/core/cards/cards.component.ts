import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() selectedCountry!: any;
  panelOpenState: boolean = false;
  confirmationModal: any;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openDialog(template: any) {
    this.confirmationModal = this.dialog.open(template, {
      autoFocus: false,
      // width: '423px',
      // height: '322px',
      disableClose: true
    });    
    const susbscription = this.confirmationModal.afterClosed().subscribe({next:(result: any) => {
      console.log(result);
      this.snackBarControl(result)
      if(susbscription){
        susbscription.unsubscribe();
      }
    },error: (error: any) => {this.snackBarControl(error.message), console.error(error)}});
  }

  snackBarControl(message: string, actions?: string) {
    // console.log(message);
    this.snackBar.open(message, actions ? actions : '', {
      duration: 2500,
      panelClass: 'mat-snack-bar-totvs',
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

}
