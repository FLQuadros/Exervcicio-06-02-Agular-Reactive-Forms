import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    personalData: FormGroup = new FormGroup({  
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
      endereco: new FormControl('', [Validators.required, Validators.minLength(10)]),
      complemento: new FormControl('', [Validators.required, Validators.minLength(10)]),
      telCellphone: new FormControl('', [Validators.required, Validators.minLength(11)]),
      telResidence: new FormControl('', [Validators.minLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
    constructor(private dialog: MatDialog) {}

    submit(): void {

    }

    showDialog(): void {
      let ref = this.dialog.open(FormDialogComponent)
  
      ref.componentInstance.name = this.personalData.controls['name'].value
      ref.componentInstance.lastName = this.personalData.controls['lastName'].value
      ref.componentInstance.userName = this.personalData.controls['userName'].value
      ref.componentInstance.cpf = this.personalData.controls['cpf'].value
      ref.componentInstance.endereco = this.personalData.controls['endereco'].value
      ref.componentInstance.complemento = this.personalData.controls['complemento'].value
      ref.componentInstance.telCellphone = this.personalData.controls['telCellphone'].value
      ref.componentInstance.telResidence = this.personalData.controls['telResidence'].value
      ref.componentInstance.password = this.personalData.controls['password'].value
      ref.componentInstance.confirmPassword = this.personalData.controls['confirmPassword'].value
    }
  

}
