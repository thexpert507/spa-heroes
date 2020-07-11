import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  public heroe:any = {}

  constructor(
    private acivatedRoute : ActivatedRoute,
    private _heroeService : HeroesService,
    private route: Router
  ) {

    this.acivatedRoute.params.subscribe( param => {
      this.heroe = _heroeService.getHeroe(param.id);
      console.log(this.heroe)
    })

   }

  ngOnInit(): void {
  }

  regresoHeroes(){
    this.route.navigate(['heroes']);
  }

}
