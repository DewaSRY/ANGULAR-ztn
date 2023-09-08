import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // template: ` <p>Hello world</p> `,
})
export class AppComponent {
  name = 'Dew A';
  imgUrl = 'https://picsum.photos/id/237/500/500';

  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e?.target as HTMLInputElement).value as string;
  }
  logImg(event: string) {
    console.log(event);
  }
}
