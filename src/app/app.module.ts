import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { UserComponent } from './user/user.component';
import { RiteshComponent } from './ritesh/ritesh.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    UserComponent,
    RiteshComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule ,
    

    
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
