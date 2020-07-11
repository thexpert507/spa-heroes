import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes-filt',
  templateUrl: './heroes-filt.component.html',
  styles: [
  ]
})
export class HeroesFiltComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor(
    private route:Router,
    private activatedRoute:ActivatedRoute,
    private _heroesService: HeroesService
  ) { 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( param => {
      
      this.termino = param.termino;
      this.heroes = this._heroesService.buscarHeroes(param.termino);
      console.log(this.heroes)
    })
  }

  heroeInfo(i){
    this.route.navigate( ['heroe', i])
  }

}
