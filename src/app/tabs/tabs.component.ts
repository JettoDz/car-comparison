import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trim } from '../car';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent {

  tab: number = -1
  selectedTrim: Trim | undefined
  
  @Input() trimsArray: Trim[] | undefined
  
  constructor() {
    this.selectedTrim = this.trimsArray && this.tab >= 0 ? this.trimsArray[this.tab] : undefined
  }

  selectTab(tab: number) {
    [document.getElementById('autonomynote'), document.getElementById('dimentionsnote')].forEach(note => {
      if (note?.classList.contains('show'))
        this.toggleNote(note)
    })
    this.tab = tab
    this.selectedTrim = this.trimsArray ? this.trimsArray[this.tab] : undefined
  }

  toggleNote(div: HTMLElement, note?: string) {
    if(div.classList.contains('hide') && note){
      div.children[0].innerHTML = note
      div.classList.replace('hide', 'show')
    } else {
      div.children[0].innerHTML = ''
      div.classList.replace('show', 'hide')
    }
  }

}