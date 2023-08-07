import { Component, ElementRef, ViewChild,  AfterViewInit, } from '@angular/core';
import { Project } from 'src/app/models/proyecto';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent  implements AfterViewInit  {
  @ViewChild('project' , {read:ElementRef}) project:any;

  public projects :Array <Project>;
  public  listaProjects: Array <Project>;
  seleccion!: string;

  constructor(){
    
    this.projects =  [
      new Project ('Dorcarlex' ,'Descripcion1' ,'REACT','page1.png' ),
      new Project ('Roraima' , 'Descripcion2' ,'JAVASCRIPT' , 'page2.png' ), 
      new Project ('HICH FOTOGRAFO' , 'Descripcion3' ,'REACT' , 'page3.png' ),
      new Project ('AppNotes' , 'Descripcion4' ,'ANGULAR' , 'page4.png' ),
      new Project ('Titulo 5' , 'Descripcion5' ,'REACT' , 'page5.png' ),
      new Project ('Titulo6' , 'Descripcion6' ,'JAVASCRIPT' , 'page6.png' ),] ;

      this.listaProjects= this.projects;
  }

  ngAfterViewInit(): void {
    
    const observer = new IntersectionObserver (
      (entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('filter');
          }
        });
      } , {
        root:null,
        rootMargin:'0px',
        threshold: 0.4
      }
    );
    
    observer.observe(this.project.nativeElement);

    this.getProjects();
    
  }
  getProjects(){
    this.listaProjects= this.projects;
    
    this.seleccion = 'all';
   
  }

 /*  getReact(){
    this.listaProjects = this.projects.filter(t => t.category=='REACT');
    this.seleccion = 'react';
  }
  getJS(){
    this.listaProjects = this.projects.filter(t => t.category=='JAVASCRIPT');
    this.seleccion = 'javascript';
  }
  getAngular(){
    this.listaProjects = this.projects.filter(t => t.category=='ANGULAR');
    this.seleccion = 'angular';
    
  }
 */
}
