import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>Hello App</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // style: ['']
})
export class AppComponent {
  name = "Dust"
  imgUrl = 'https://picsum.photos/id/237/500/500'

  getName() {
    return this.name
  }

  changeImage(event: KeyboardEvent) {
    this.imgUrl = (event.target as HTMLInputElement).value
  }

  logImg(event: string) {
    console.log(event)
  }
}
