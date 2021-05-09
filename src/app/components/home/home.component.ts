import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listNoticias: any;

  constructor( private noticias: NoticiasService) { }

  ngOnInit(): void {
    this.getListoNoticias();
  }

  getListoNoticias() {
    this.noticias.getListNoticias().subscribe((res) => {
      this.listNoticias = res;
      console.log(res);
    });
  }

}
