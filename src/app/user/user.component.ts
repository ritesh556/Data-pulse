import { Component, ElementRef, OnInit,QueryList,ViewChildren } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ApiserviceService } from '../apiservice.service';





@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  @ViewChildren('options') options: QueryList<ElementRef> | undefined;

  filteredUsers: any[] | undefined;
readuser:any
name:any
showSelect = false

readUser:any
usr: any;



  constructor(private apI:ApiserviceService){}
  ngOnInit(): void {
    this.instanceUdload()
    console.log(this.name)
   
    
  }

  getUserDataByName(){
    
    this.readuser = []
    this.apI.getUserName(this.name).subscribe((res)=>{
      if(!res){
        this.readuser = {
        
         
        }
       
        
      
        
      }
      
      else{
        
        console.log(res)
        this.readuser = res.data
        this.filteredUsers = this.readuser.filter((usr: { fullname: string; }) => usr.fullname.toLowerCase().includes(this.name.toLowerCase()));
        
        if (this.name.length>0){
        this.showSelect = true}
        this.name = ""
        console.log(this.name)
        
       
      }
    })
    
    
  }
  instanceUdload(){
    this.apI.getAlluser().subscribe((res)=>{
      // console.log("get all data",res)
     
      this.readUser = this.removeDuplicates(res.data)
      console.log(this.readUser)
     
  })
}
removeDuplicates(array: any[]): any[] {
  let uniqueArray = Array.from(new Set(array.map(item => item.fullname)))
    .map(fullname => {
      return array.find(item => item.fullname === fullname);
    });
  return uniqueArray;
}
}



