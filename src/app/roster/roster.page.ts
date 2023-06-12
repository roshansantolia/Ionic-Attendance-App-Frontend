import { Component, OnInit } from '@angular/core';
import { Student, StudentsService } from '../students.service';
import {
  ActionSheetController,
  AlertController,
  ToastController,
} from '@ionic/angular';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.page.html',
  styleUrls: ['./roster.page.scss'],
})
export class RosterPage implements OnInit {
  students: Student[] = [];

  constructor(
    private studentsService: StudentsService,
    private actionSheet: ActionSheetController,
    private alertControl: AlertController,
    private toastControl: ToastController
  ) {}

  ngOnInit() {
    this.students = this.studentsService.getAll();
  }

  studentUrl(student: Student) {
    return `/student/${student.id}`;
  }

  async deleteStudent(student: Student) {
    this.students = this.students.filter((elem) => elem.id !== student.id);

    const alert = await this.toastControl.create({
      message: `${student.firstName} ${student.lastName} Delete`,
      position: 'top',
      duration: 2000,
    });

    await alert.present();
  }

  async showActions(student: Student) {
    const actions = await this.actionSheet.create({
      header: `${student.firstName} ${student.lastName}`,
      buttons: [
        {
          text: 'Mark Present',
          icon: 'eye',
          handler: () => {
            student.status = 'present';
          },
        },
        {
          text: 'Mark Absent ',
          icon: 'eye-off-outline',
          handler: () => {
            student.status = 'absent';
          },
        },
        {
          text: 'Delete',
          icon: 'trash',
          role: 'Destructive',
          handler: () => {
            this.showDeleteAlert(student);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel Clicked');
          },
        },
      ],
    });

    await actions.present();
  }

  async showDeleteAlert(student: Student) {
    const alert = await this.alertControl.create({
      header: 'Delete this student ?',
      subHeader: `${student.firstName} ${student.lastName}`,
      message: 'This operation cannot be undone.',
      buttons: [
        {
          text: 'Delete',
          handler: () => {
            this.deleteStudent(student);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }
}
