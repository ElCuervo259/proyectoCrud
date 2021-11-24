import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevousuarioComponent implements OnInit {

  public name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
