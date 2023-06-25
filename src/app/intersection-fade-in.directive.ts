import { Directive , ElementRef , AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appIntersectionFadeIn]'
})
export class IntersectionFadeInDirective implements AfterViewInit {
  public elem: any;
  constructor(el: ElementRef) {
    this.elem= el.nativeElement;
   }

  ngAfterViewInit(): void {
    const cargar = (entries: any , observador:any) => {
      entries.forEach((entry:any)=>{
          if (entry.isIntersecting){
              entry.target.classList.add('fade-In');
          }
      });
  }
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
}

const observador = new IntersectionObserver ( cargar, options);

observador.observe(this.elem);
    
  }

}

// esta directivase usa para .skill-porcent