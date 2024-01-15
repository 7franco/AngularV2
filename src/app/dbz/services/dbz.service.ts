import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[]=[{
    id: uuid(),
    name: 'Krilling',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter( character:Character):void{
    // const newCharacter ={
    //   id:uuid(),
    //   name: character.name,
    //   power:character.power
    // }
    const newCharacter ={ ...character , id:uuid()};

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(id:number):void{
  //   this.characters.splice(id,1);
  // }

  deleteCharacterById(id:string):void{
    console.log(this.characters);
    this.characters = this.characters.filter(character => character.id !==id);
    console.log(this.characters);
  }

}
