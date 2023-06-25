import { Directive , AfterViewInit , ElementRef } from '@angular/core';

@Directive({
  selector: '[appIntersectionVisibleTwo]'
})
export class IntersectionVisibleTwoDirective  implements AfterViewInit {
  public elem: any
  constructor(el:  ElementRef) { 
    this.elem= el.nativeElement;
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
    rootMargin: '0px',
    threshold: 1.0
}

const observador= new IntersectionObserver( cargar, options);

observador.observe(this.elem);
    
  }
}

// Esta directiva fue utiliza da para .titlte-Project y contenedor-filter
