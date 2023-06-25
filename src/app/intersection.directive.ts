import { Directive, ElementRef, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[appIntersection]'
})
export class IntersectionDirective implements AfterViewInit {

    public element : any; 

  constructor(el: ElementRef) {
    this.element= el.nativeElement;
  //  console.log(el.nativeElement);
  //  el.nativeElement.classList.add('bb');
   }

   ngAfterViewInit(): void {

    const cargar = (entries: any , observador:any) => {
      entries.forEach((entry:any)=>{
          if (entry.isIntersecting){
              entry.target.classList.add('mostrar')
          }
      });
  }
    
  let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
  }
    const observardor = new IntersectionObserver (cargar , options);
    observardor.observe(this.element);
  }

    //
/*     const observer= new IntersectionObserver (
      entries=> {
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('mostrar');
          }
        });
      } , {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      }
    );

    observer.observe(this.element);
 */
    }
