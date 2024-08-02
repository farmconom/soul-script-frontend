import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  textToType: string = 'Soul Script';
  displayText: string = '';
  typingSpeed: number = 150; // Speed in milliseconds

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping() {
    let currentIndex = 0;

    const type = () => {
      if (currentIndex < this.textToType.length) {
        this.displayText += this.textToType.charAt(currentIndex);
        currentIndex++;
        setTimeout(type, this.typingSpeed);
      }
    };

    setTimeout(() => {
      type();
    }, 200);
  }
}
