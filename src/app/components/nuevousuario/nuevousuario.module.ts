import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevousuarioRoutingModule } from './nuevousuario-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NuevousuarioRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class NuevousuarioModule { }
