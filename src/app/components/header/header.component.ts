import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  isShrink: boolean = false;
  shrinkOffset: number = 200;
  @ViewChild('menu') menu: ElementRef | undefined;

  handleMenuClick(): void {
    // Close the menu on click
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleLinkClick(): void {
    // Close the menu on click
    this.isMenuOpen = !this.isMenuOpen;
    // Scroll to the top of the page on click of nav elements
    if (!this.isMenuOpen) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.menu?.nativeElement.contains(event.target) && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isShrink = window.scrollY > this.shrinkOffset;
  }
}
