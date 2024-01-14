import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = 'ironman'
  public age  : number = 45


  get capitalizeName(){
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  chageHero():void{
    if(this.name == 'ironman'){
      this.name = 'spiderman';
    }else{
      this.name = 'ironman';
    }


  }

  chageAge():void{
    if(this.age == 45){
      this.age = 35;
    }else{
      this.age = 45;
    }
  }

  resetForm():void{
    this.name = 'ironman'
    this.age  = 45
  }

}
