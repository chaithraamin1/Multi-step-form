import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multi-step-form';
  ngOnInit(){
    var Form1:any=document.getElementById("Form1");
    var Form2:any=document.getElementById("Form2");
    var Form3:any=document.getElementById("Form3");

    var Next1:any=document.getElementById("Next1");
    var Next2:any=document.getElementById("Next2");

    var Back1:any=document.getElementById("Back1");
    var Back2:any=document.getElementById("Back2");

    var Back2:any=document.getElementById("Back2");

    var progress:any=document.getElementById("progress");
    Next1.onclick=function(){
      Form1.style.left="-450px";
      Form2.style.left="40px";
      progress.style.width="240px";
    }
    Back1.onclick=function(){
      Form1.style.left="40px";
      Form2.style.left="450px";
      progress.style.width="120px";
    }
    
    Next2.onclick=function(){
      Form2.style.left="-450px";
      Form3.style.left="40px";
      progress.style.width="360px";
    }
    
    Back2.onclick=function(){
      Form2.style.left="40px";
      Form3.style.left="450px";
      progress.style.width="240px";
    }
  }
}
