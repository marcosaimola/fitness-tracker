import { Subject } from 'rxjs';
import { Training } from './training.model';

export class TrainingServices{

    exerciseChanged = new Subject<Training>()
    trainings: Training[] = [];
    private runningTraining : Training;
    
    private availableTraining : Training[] = [
        {id: 'crunches', name: 'Crunches', duration: 30, calories: 8},
        {id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15},
        {id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18},
        {id: 'burpees', name: 'Burpees', duration: 60, calories: 8},
    ];
    
    startTraining(selectedId: string){
        this.runningTraining = this.availableTraining.find(x=> x.id === selectedId);
        this.exerciseChanged.next({...this.runningTraining});
    }

    getRunninsTraining(){
        return {...this.runningTraining};
    }

    getTrainings(){
        return this.availableTraining.slice();
    }

    completeTraining(){
        this.trainings.push({...this.runningTraining,
        date: new Date(),
        state: 'completed'
        });
        this.runningTraining = null;
        this.exerciseChanged.next(null);
    }

    cancelTraining(progress: number){
        this.trainings.push({...this.runningTraining,
            duration: this.runningTraining.duration * (progress/100),
            calories: this.runningTraining.calories * (progress/100),
            date: new Date(),
            state: 'cancelled'
            });
            this.runningTraining = null;
            this.exerciseChanged.next(null);
    }

    getCompleteOrCancelledTraining(){
        return this.trainings.slice();
    }

}