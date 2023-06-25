import { Component , ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements AfterViewInit{
  @ViewChild('little' , { read:ElementRef}) little:any;

  ngAfterViewInit(): void {

    const observer = new IntersectionObserver (
      (entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('sunDown');
          }
        });
      } , {
        root:null,
        rootMargin:'0px',
        threshold: 0.8
      }
    );
    
    observer.observe(this.little.nativeElement);
  }

}
