import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appIntersectionVisible]'
})
export class IntersectionVisibleDirective implements AfterViewInit {

  public element : any; 
  constructor(el: ElementRef) { 
    this.element= el.nativeElement;
  }

  ngAfterViewInit(): void {

    const cargar = (entries: any , observador:any) => {
      entries.forEach((entry:any)=>{
          if (entry.isIntersecting){
              entry.target.classList.add('visible')
          }
      });
  }
  let options = {
    root: null,
    rootMargin: '40px',
    threshold: 0.6
}

const observador= new IntersectionObserver( cargar, options);

observador.observe(this.element);

}

}

/*  in this directive esta apuntando a : 
.Perfil-AboutMe , 
.skills-tools
line-Project
.galery
 */
