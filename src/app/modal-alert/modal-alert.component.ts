import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-modal-alert',
  templateUrl: 'modal-alert.component.html',
  styleUrls: ['modal-alert.component.css'],
})
export class modalAlert {

 errMsg: string;

  constructor(public dialog: MatDialog) {}

    openDialog() {

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      this.dialog.open(modalAlert, dialogConfig);
    }

}

