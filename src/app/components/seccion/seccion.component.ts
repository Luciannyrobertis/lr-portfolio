import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/proyecto';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {
  @Input() color!: string;
  @Input() label!: string;
  selection!: string;

  city = ['Caracas' , 'Margarita' , ' Valencia']
  ngOnInit(): void {
   
  }

  resaltar(cit:string){
    this.selection = cit;


  }
}



