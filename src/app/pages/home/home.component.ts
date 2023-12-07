import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  ngOnInit(): void{
    const aHref: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a');

    let active: string = 'intro';
    let zIndex: number = 2;

    aHref.forEach((a: HTMLAnchorElement) => {
      a.addEventListener('click', function (event: MouseEvent) {
        // Use square brackets to access 'tab' property
        let tab: string | null = a.dataset['tab']!;
        if (tab !== null && tab !== active) {
          let activeOld: HTMLElement | null = document.querySelector('.tab.active');
          if (activeOld) activeOld.classList.remove('active');
          active = tab;

          let tabActive: HTMLElement | null = document.getElementById(active);
          zIndex++;
          if (tabActive) {
            tabActive.style.zIndex = zIndex.toString();
            tabActive.style.setProperty('--x', event.clientX + 'px');
            tabActive.style.setProperty('--y', event.clientY + 'px');
            tabActive.classList.add('active');
          }
        }
      });
    });
  }
}
