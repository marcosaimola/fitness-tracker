import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Training } from '../training.model';
import { TrainingServices } from '../training.services';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {

  constructor(private trainingServices: TrainingServices) { }

  @ViewChild(MatSort) sort : MatSort;

  columnsToDisplay = ['date','name','duration','calories', 'state'];
  dataSource = new MatTableDataSource<Training>() 

  ngOnInit(){
    this.dataSource.data = this.trainingServices.getCompleteOrCancelledTraining();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }


}
