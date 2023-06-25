import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIntersectionShine]'
})
export class IntersectionShineDirective implements AfterViewInit{
  public elem:any 
  constructor(el:ElementRef ) { 
    this.elem= el.nativeElement;
  }

  ngAfterViewInit(): void {

  const cargar = (entries: any , observador:any) => {
      entries.forEach((entry:any)=>{
          if (entry.isIntersecting){
              entry.target.classList.add('opacity')
          }
      });
  }
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
}

const observador = new IntersectionObserver ( cargar, options);

observador.observe(this.elem);
    
  }

}

//esta directiva se utiliza para .shine en tools img
