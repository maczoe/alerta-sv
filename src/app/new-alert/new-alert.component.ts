import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-new-alert',
  templateUrl: './new-alert.component.html',
  styleUrls: ['./new-alert.component.scss']
})
export class NewAlertComponent implements OnInit {

  type: number;
  title: string = "";
  icon: string = "";
  srcResult;

  constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.type = +params['type'];
      switch(this.type) {
        case 1:
          this.title = "Emergencia";
          break;
        case 2:
          this.title = "Alumbrado público";
          break;
        case 3:
          this.title = "Basura";
          break;
        case 4:
          this.title = "Incendio";
          break;
        case 5:
          this.title = "Foco de plagas";
          break;
        case 6:
          this.title = "Daño de carretera";
          break;
        case 7:
          this.title = "Daño ecológico";
          break;
      }

      switch(this.type) {
        case 1:
          this.icon = "local_hospital";
          break;
        case 2:
          this.icon = "wb_incandescent";
          break;
        case 3:
          this.icon = "delete_forever";
          break;
        case 4:
          this.icon = "local_fire_department";
          break;
        case 5:
          this.icon = "bug_report";
          break;
        case 6:
          this.icon = "edit_road";
          break;
        case 7:
          this.icon = "eco";
          break;
      }
    });
  }

  send() {
      this.dialog.open(ConfirmDialog);
  }

  back() {
    this.router.navigateByUrl("alerts");
  }

  onFileSelected(event) {
    if(!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.srcResult= reader.result;
    }
  }
}

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm-dialog.html',
})
export class ConfirmDialog {

  constructor(private _snackBar: MatSnackBar) {

  }

  confirm() {
    this._snackBar.open('Su reporte ha sido enviado exitosamente', 'Cerrar', {
      duration: 3600,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    });

  }
}
