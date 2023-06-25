import { Component, OnInit , ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit , AfterViewInit {
  @ViewChild('turning' , {read: ElementRef}) turning: any ;

  ngAfterViewInit(): void {

    const observer = new IntersectionObserver (

      (entries)=> {
        entries.forEach((entry)=>{
          if (entry.isIntersecting){
            console.log(this.turning.nativeElement.textContent);
            entry.target.classList.add('visible');
          }
        });
      } , {
        root:null,
        rootMargin: '0px',
        threshold: 1.0
      }
    );
   
    observer.observe(this.turning.nativeElement);
  }
  ngOnInit(): void {
   
  }


}
