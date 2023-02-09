import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  know = true
  
  
  constructor(private router:Router){
    console.log(router.url)
   
  }
  ngOnInit(): any {
    if (this.router.url==="/main"||this.router.url==="/Aboutus"){
      this.know = false
     
  }

  else{
    this.know = true
  }
 






}
}


   
   
    
  
 
 


