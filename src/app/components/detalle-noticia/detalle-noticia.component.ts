import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { fromRoot } from 'src/app/reducer/app.redux.module';
import { Store } from '@ngrx/store';
import { appState, imgState } from 'src/app/reducer/app.interface';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.scss']
})
export class DetalleNoticiaComponent implements OnInit {

  listNoticias: any;
  trueNoticia = true;
  idImg: any;
  urlImg: any;

  constructor(
    private router: Router,
    private store: Store<{getNoticias: appState}>, 
    private storeImg: Store<{getImagenes: imgState}> ) { 
      this.store.select(fromRoot.SelectImagenData).subscribe(img => {this.idImg = img.id; this.urlImg = img.urlimg;});
    }

  ngOnInit(): void {
    this.getNoticiasID(this.idImg);
  }

  getNoticiasID(idNt: any){
    this.store.select(fromRoot.SelectNoticiaData, {id: idNt}).subscribe(items => {
      this.listNoticias = items
      if(items === undefined) {
        this.trueNoticia = false;
      }
    });
  }

}
