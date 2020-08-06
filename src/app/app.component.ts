import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('editor') editor;

  name = 'Angular';
  modules = {
    formula: true,
    toolbar: [      
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'], 
      ['image', 'code-block']
    ]
  };

  logChange($event) {
    console.log("lpg change data")
   // console.log(this.editor);
    console.log($event.html);
  }

}
