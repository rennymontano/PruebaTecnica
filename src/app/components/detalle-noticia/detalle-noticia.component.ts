import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import {  ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.scss']
})
export class DetalleNoticiaComponent implements OnInit {

  listNoticias: any;
  idNoticia: string = '';
  trueNoticia = true;

  constructor( private noticias: NoticiasService,
    private actRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.idNoticia = this.actRouter.snapshot.params.id;
    this.getListoNoticias();
  }

  getListoNoticias() {
    this.noticias.getListNoticias().subscribe((res) => {
      this.listNoticias = res.filter((item: any) => {
        if(item.id === this.idNoticia) {
          return item;
        }
      });
      this.trueNoticia = this.listNoticias.length == 0 ? false :  true;
    });
  }
}
