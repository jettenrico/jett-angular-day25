import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent {
  images: string[] = [
    "https://picsum.photos/200/200?random=1",
    "https://picsum.photos/200/200?random=2",
    "https://picsum.photos/200/200?random=3",
    "https://picsum.photos/200/200?random=3",
    "https://picsum.photos/200/200?random=3",
    "https://picsum.photos/200/200",
  ]

  addImage(){
    let randomNumber:number = Math.floor(Math.random() * 60);
    this.images.push(`https://picsum.photos/200/200/?random=${randomNumber}`);
  }
}
