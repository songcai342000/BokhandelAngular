import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let list = document.getElementById("dg-book");   // Get the <ul> element with id="myList"
    if (screen.width > 1400) {
      alert(screen.width);
      document.getElementById("flexibleDiv0").style.visibility = "visible";          // Remove <ul>'s first child node (index 0) 
    }
    else {
      document.getElementById("flexibleDiv1").style.visibility = "visible";           // Remove <ul>'s first child node (index 0) 
    }
  }

}
