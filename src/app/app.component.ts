import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'My Angular Application';
  version = "1.0"; 
  disabled:Boolean = true;

  changeTitle(event){
    console.log(event.terget.value);
    this.title = event.target.value;
    //this.title = event.key;
  }
}
