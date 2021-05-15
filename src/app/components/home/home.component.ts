import { Component, OnInit } from '@angular/core';
import { fromRoot } from 'src/app/reducer/app.redux.module';
import { Store } from '@ngrx/store';
import { appState, imgState } from 'src/app/reducer/app.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listNoticias: any;
  listNoticias$: any;

  constructor( private store: Store<{getNoticias: appState}>,
    private storeImg: Store<{getImagenes: imgState}> ,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDataNoticias();
  }

  getDataNoticias() {
    this.store.dispatch(fromRoot.GetDataNoticias());
    this.store.select(fromRoot.SelectNoticiasData).subscribe(items => this.listNoticias= items);
  }

  getRandom(max: number, min: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getImagen(id: any) {
    const url = 'assets/img/img'+ id +'.jpg';
    return url;
  }

  redirectDetalle(id: any) {
    const url = 'assets/img/img'+ id +'.jpg';
    this.storeImg.dispatch(fromRoot.GetDataImagen({id: id, urlimg: url}));
    this.router.navigate(['/noticias', id])
  }

}
