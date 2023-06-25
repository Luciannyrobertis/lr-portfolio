import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

  toServices(){
    document.querySelector('.middle')?.scrollIntoView({behavior:'smooth'});
  }

  toProject(){
    document.getElementById('projects')?.scrollIntoView({behavior:'smooth'});
  }

  toFooter(){
    document.getElementById('footer')?.scrollIntoView({behavior:'smooth'});
  }

}
