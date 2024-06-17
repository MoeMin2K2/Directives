import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { BoldOnClickDirective } from './bold-on-click.directive';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule, StudentListComponent, BoldOnClickDirective, CommonModule]
})
export class AppComponent {
  title = 'direcives';

  employees = [
    { name: 'Moe Min Oo', gender: "male", email: 'moe.minoo@bss.edu.mm', birthday: '2002-05-26', grade: "Full Stack Developer", imgUrl: "https://media.istockphoto.com/id/1287833566/photo/portrait-of-attractive-asian-guy-posing-at-studio.jpg?s=612x612&w=0&k=20&c=ML_R-2DLMWk4tOf6tsOtdKABd-jyL-fB9SiJ_Ovjy7I=" },
    { name: 'Myo Thu Aung', gender: "male", email: 'myo.thuaung@bss.edu.mm', birthday: '2001-01-23', grade: "Full Stack Developer", imgUrl: "https://media.istockphoto.com/id/1807317293/photo/young-guy-african-american-student-in-glasses-with-backpack-on-yellow-isolated-background.jpg?s=612x612&w=0&k=20&c=gcge6Qal2xnwpCPG048UmPQcflCe1YeterYR4K1_iLQ=" },
    { name: 'Han Naung Soe', gender: "male", email: 'han.naungsoe@bss.edu.mm', birthday: '2000-11-08', grade: "Full Stack Developer", imgUrl: "https://media.istockphoto.com/id/1278388787/photo/man-in-yellow-shirt-on-yellow-background.jpg?s=612x612&w=0&k=20&c=dtjihsLle1GQNLcRn-wFPeKA-3vgcZG4t-DejLyOdA4=" },
    { name: 'Thin Thin Oo', gender: "female", email: 'thin.thinoo@bss.edu.mm', birthday: '1998-06-20', grade: "Full Stack Developer", imgUrl: "https://media.istockphoto.com/id/1334005366/photo/portrait-young-woman-smiling-on-yellow-background.jpg?s=612x612&w=0&k=20&c=7Nui1Z8YYEfm31SR0RN4dTFla1k038kSmLGhJewQK90=" },
    { name: 'Khin Sabai Oo', gender: "female", email: 'khin.sabaioo@bss.edu.mm', birthday: '1999-06-22', grade: "Full Stack Developer", imgUrl: "https://media.istockphoto.com/id/1365390122/photo/portrait-of-nice-looking-cheerful-wavy-haired-girl-posing-isolated-over-bright-yellow-color.jpg?s=612x612&w=0&k=20&c=jxcrQEwGxYpmshoY1w3tqg6Qansi-jsyGiCQEsUbkoY=" },
  ];

  /*
      for testing

      male {
      "https://media.istockphoto.com/id/1813883287/photo/young-asian-guy-in-white-t-shirt-standing-with-arms-crossed-and-smiling-on-yellow-isolated.jpg?s=612x612&w=0&k=20&c=ncKGPX4BGyyHLX1zPouL6uC9Ml6bAuIW7X6MiCNQAs0="
      "https://media.istockphoto.com/id/1423386765/photo/asian-young-man-posing-on-a-yellow-background.jpg?s=612x612&w=0&k=20&c=XirBhbukuBHBngRSdXwUHI0UszRmap85Wz6h-qLi898=" 
      }

      female {
      "https://media.istockphoto.com/id/1340002007/photo/love-day-asian-women-showing-bright-smiles-happy-and-in-love-concept-of-love-and-happiness.jpg?s=612x612&w=0&k=20&c=bKXhyBKRSdLBtkD2LTG7sQhyzRZ77Hnh0XG8EPPleco="
      "https://media.istockphoto.com/id/1972577846/photo/a-chubby-asian-woman-wearing-a-white-t-shirt-showing-confidence-and-pride-in-her-appearance.jpg?s=612x612&w=0&k=20&c=BPLtjrJg5zsF6J5ap6SWQOjj13yHmpPWM2G4CBeZ6vM="
      }
  */

  newEmployee = { name: '', gender: '', email: '', birthday: '', grade: '', imgUrl: '' };

  addStudent() {
    if (this.newEmployee.name && this.newEmployee.email && this.newEmployee.birthday && this.newEmployee.gender) {
      this.employees.push({ ...this.newEmployee });
      this.newEmployee = { name: '', gender: '', email: '', birthday: '', grade: '', imgUrl: '' };
    }
  }

  removeEmployee(index: number) {
    console.log("Remove Employee is Called.")
    this.employees.splice(index, 1);
  }
}
