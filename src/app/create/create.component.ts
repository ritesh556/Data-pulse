import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  value = ""
  display = 'display'
 



  userForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
  });
  

  constructor(private api: ApiserviceService,private router:ActivatedRoute) {}
  getparamid:any
  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id')
    this.api.getSingleData(this.getparamid).subscribe((res)=>{
      console.log(res,"selected update data")
      this.userForm.patchValue({
        'fullname':res.data[0].fullname,
        "email":res.data[0].email,
        "mobile":res.data[0].mobile

      })
    })

  }
  time(int:any){
    setTimeout(() => {
          
      this.display = "notdisplay"
      
    }, int*1000);
  }
  

  userSubmit() {
    if (this.userForm.valid){
      
      console.log(this.userForm.value)
      this.api.createData(this.userForm.value).subscribe((res)=>{
        console.log(res,"Data added success")
        
        this.value = "Data has been added"
        this.display = "sucess"
        this.time(5)
       
        this.userForm.reset()
      })
      
    }
    else{
      this.value = "Enter all element"
      this.display = "show"
      this.time(5)
      

      
    }
   
   
  }
  updateUser(){
    // console.log(this.userForm.value)
    if(this.userForm.valid){
      this.api.updateData(this.userForm.value,this.getparamid).subscribe((res)=>{
        console.log(res,"data updated successfully")
        this.value= "Account updated sucessfully"
        this.display="sucess"
        this.time(5)

      })
    }
    else{
      this.value = "Enter all element"
      this.display = "show"
      this.time(5)


    }

      
  }



}
