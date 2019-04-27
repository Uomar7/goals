import { Component, OnInit,Input } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals = [
    new Goal(1, 'watch finding nemo','FInd an online version and watch merlin find his son',new Date(2019,3,14) ),
    new Goal(2, 'Buy cookies','I have to buy cookies for the parrot',new Date(2019,6,9) ),
    new Goal(3, 'get new phone case','Diana has a birthday coming soon',new Date(2019,1,12) ),
    new Goal(4, 'get dog food','pupper likes expensive snack',new Date(2019,0,18) ),
    new Goal(5, 'Solve math problems','damn math',new Date(2018,2,14) ),
    new Goal(6, 'Plot my world dominating plan','Cause am an evil overlord',new Date(2019,3,14) ),
  ]
  toogleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  deleteGoal(isComplete,index){
    if(isComplete){
      let toDelete=confirm(`are you sure you want to delete ${this.goals[index].name}`)
    if (toDelete){
      this.goals.splice(index,1)
    }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
