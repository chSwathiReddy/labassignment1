import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalComponent } from './cal/cal.component';
import { FormsModule } from '@angular/forms';
import { EmpComponent } from './emp/emp.component';
import { MypipePipe } from './mypipe.pipe';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { DataService } from './data.service';
import { HobbicmpComponent } from './hobbicmp/hobbicmp.component';


@NgModule({
  declarations: [
    AppComponent,
    CalComponent,
    EmpComponent,
    MypipePipe,
    HobbiesComponent,
    HobbicmpComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
