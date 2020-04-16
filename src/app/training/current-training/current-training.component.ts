import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from '../stop-training/stop-training.component';
import { TrainingServices } from '../training.services';
import { Training } from '../training.model';


@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  progress = 0;
  timer : any;
  runningTraining : Training;

  constructor(private dialog: MatDialog, private trainingService: TrainingServices) { }

  ngOnInit(): void {
    this.onStoporResume();
    this.runningTraining = this.trainingService.getRunninsTraining();
  }

  onStoporResume(){
    const step = this.trainingService.getRunninsTraining().duration / 100 * 1000;
    this.timer = setInterval(()=>{
      this.progress += 1;
      if(this.progress >= 100)
      {
        this.trainingService.completeTraining();
        clearInterval(this.timer);
      }
    },step)
  }

  onStop(){
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent,{
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.trainingService.cancelTraining(this.progress);
      else
        this.onStoporResume();
    });
  }
}
