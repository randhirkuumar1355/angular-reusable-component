import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  selectedRadioButtonValue: string = 'All';


  @Input() all: number;
  @Input() male: number;
  @Input() female: number;

  @Output() countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged(){
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue); 
  }
}
