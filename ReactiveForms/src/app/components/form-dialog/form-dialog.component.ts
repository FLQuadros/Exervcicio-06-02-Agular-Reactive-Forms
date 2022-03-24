import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {

  name: string = ''
  lastName: string = ''
  userName: string = ''
  cpf: string = ''
  endereco: string = ''
  complemento: string = ''
  telCellphone: string = ''
  telResidence: string = ''
  password: string = ''
  confirmPassword: string = ''

  constructor(private dialogRef: MatDialogRef<FormDialogComponent>) { }

  ngOnInit(): void {
  }

  sair():void {
    this.dialogRef.close()
  }

}
