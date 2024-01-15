import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete:EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList:Character[] =[{
    name:'Trunk',
    power:10
  }]

  onDeleteCharacter(id:number):void{
    //TODO Emitir el ID del Personaje
    this.onDelete.emit(id);
  }


}
