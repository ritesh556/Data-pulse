import { compileDeclareDirectiveFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  constructor(private api:ApiserviceService){}
  readUser:any
  text=""

  time(string:any,int:any){
    setTimeout(()=>{
      this.text = string
    },int*1000)
  }
  
  ngOnInit(): void {
    
    this.instanceUdload()
  }
  deleteId(id:any){
    // console.log(id,"selected id")
    this.api.deleteData(id).subscribe((res)=>{
      console.log(res,"delected id no:")
      this.instanceUdload()
     
     
     this.time("█▒▒▒▒▒▒▒▒▒",1)
     this.time("███▒▒▒▒▒▒▒",1.4)
      this.time("█████▒▒▒▒▒",1.7)
      this.time("███████▒▒▒",1.9)
     this.time("██████████",2.3)
    this.time(`Data has been delected of id:${id}`,3.3)
    
     this.time("",4.3)

    })
  }
  instanceUdload(){
    this.api.getAlluser().subscribe((res)=>{
      // console.log("get all data",res)
      this.readUser = res.data
  })
}


}
