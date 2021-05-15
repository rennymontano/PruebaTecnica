import { Component, OnInit } from '@angular/core';
import { fromRoot } from 'src/app/reducer/app.redux.module';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/reducer/app.reducer';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listNoticias: any;
  listNoticias$: any;

  constructor( private store: Store<{getNoticias: appState}> ) { }

  ngOnInit(): void {
    this.getDataNoticias();
  }

  getDataNoticias() {
    this.store.dispatch(fromRoot.GetDataNoticias());
    this.store.select(fromRoot.SelectNoticiasData).subscribe(items => this.listNoticias= items);
  }

}
