import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boom',
  standalone: true,
  imports: [],
  templateUrl: './boom.component.html',
  styleUrl: './boom.component.css'
})
export class BoomComponent {
  @Input() title!:string;
}
