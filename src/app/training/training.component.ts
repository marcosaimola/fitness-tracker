import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingServices } from './training.services';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  exerciseSubscription : Subscription;
  ongoingTraining = false;

  constructor(private trainingService: TrainingServices) { }

  ngOnInit(): void {
    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(exercise=>{
      this.ongoingTraining = (exercise) ?  true : false;
    });
  }

}
