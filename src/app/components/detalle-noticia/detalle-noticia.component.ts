import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import {  ActivatedRoute } from '@angular/router'
import { fromRoot } from 'src/app/reducer/app.redux.module';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/reducer/app.reducer';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.scss']
})
export class DetalleNoticiaComponent implements OnInit {

  listNoticias: any;
  trueNoticia = true;

  constructor( private noticias: NoticiasService,
    private actRouter: ActivatedRoute,
    private store: Store<{getNoticias: appState}> ) { }

  ngOnInit(): void {
    const idNoticia = this.actRouter.snapshot.params.id;
    this.getNoticiasID(idNoticia);
  }

  getNoticiasID(idNt: any){
    this.store.select(fromRoot.SelectNoticiaData, {id: idNt}).subscribe(items => this.listNoticias = items);
  }

}
