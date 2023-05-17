import { Component, Inject, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroservice: HeroService,
    private messageservice: MessageService
  ) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  clearIt() {
    this.selectedHero = undefined;
  }
  getHeroes(): void {
    this.heroservice.getHeroes().subscribe((law) => (this.heroes = law));
  }
}
