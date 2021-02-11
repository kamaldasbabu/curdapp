import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';


const allModule = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatExpansionModule
];


@NgModule({
  declarations: [],
  imports: [
    allModule
  ],
  exports: [allModule]
})
export class MatmoduleModule { }
