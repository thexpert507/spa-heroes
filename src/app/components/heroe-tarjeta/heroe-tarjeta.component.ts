import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:string;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  heroeInfo(){
    this.route.navigate( ['heroe', this.index])
  }
}
