import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderPrefixDirective } from '../gender-prefix.directive';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, GenderPrefixDirective],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  @Input() id!: number;
  @Input() name!: string;
  @Input() email!: string;
  @Input() imgUrl!: string;
  @Input() gender!: string;
  @Output() remove = new EventEmitter<void>();

  @ContentChild('birthday') birthday: any;
  @ContentChild('grade') grade: any;

  removeEmployee() {
    console.log("Remove Called");
    this.remove.emit();
  }

}
