import { Component, OnInit} from '@angular/core';
import { TrainingServices } from '../training.services';
import { Training } from '../training.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  constructor(private trainingService: TrainingServices) { }

  trainings : Training[];

  ngOnInit(): void {
    this.trainings = this.trainingService.getTrainings();
  }

  startNewTraining(ngForm: NgForm){
    this.trainingService.startTraining(ngForm.value.exercise);
  }
}
