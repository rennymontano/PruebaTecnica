import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrosService } from 'src/app/services/registros.service';
import Swal from'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  form: any;
  listProgramas: any;

  constructor(private registro: RegistrosService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cargarForm();
    console.log(this.f);
    this.getProgramas();
  }

  cargarForm() {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.maxLength(10)]],
      comentario: ['', [Validators.required, Validators.maxLength(200)]],
      selectorPrograma: ['', [Validators.required]],
    });
  }

  get f(){
    return this.form.controls;
  }

  get errorEmail() {
    if(this.f.email.errors!== null && this.f.email.errors.hasOwnProperty('email')) {
      if(this.f.email.errors.email) {
        return true;
      }
    }
    return false;
  }
  get errorTelefono() {

    if(this.f.telefono.errors !== null) {
      if(this.f.telefono.errors.hasOwnProperty('maxlength')) {
        return true;
      }
    }
    return false;
  }

  get errorComentario() {

    if(this.f.comentario.errors !== null) {
      if(this.f.comentario.errors.hasOwnProperty('maxlength')) {
        return true;
      }
    }
    return false;
  }
 
  resetValue(){
      this.form.reset({nombre: '', email: '', apellido: '', comentario: '', telefono: ''});
  }

  submit(event: any){
    event.preventDefault();
    if(this.form.valid){
      console.log(this.form.value);
      this.registro.setRegistro(this.form.value).subscribe((res:any) => {
        Swal.fire('Registro exitoso...', '', 'success').then((value) => {
          this.resetValue();
        });
      },
      (err: any) => {
        console.error('Hay un error en los datos a registrar')
      }
      );
    } else {
      this.form.markAllAsTouched();
    }
}

  getProgramas() {
    this.registro.getListProgramas().subscribe((res) => {
      let aux = 0;
      this.listProgramas = res.filter((item:any) => 
      {
          if(item.id !== aux) {
            aux = item.id
            return item;
          } 
      });
    })
  }

  validaTextNumber(event: any, tipo: string ) {

    let regex = new RegExp("^[a-zA-Z]+$");
    if(tipo === 'numeric') {
      regex = new RegExp("^[0-9]+$");
    }
    
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
      
      event.preventDefault();
    }

  }

}
