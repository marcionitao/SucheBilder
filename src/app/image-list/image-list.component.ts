import { ImageService } from './../shared/image.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  searchQuery: string;
  images: any [];
  imagesFound: boolean = false;
  searching: boolean = false;

  constructor( private imageService: ImageService ) { }

  ngOnInit() {

  }

  handleSuccess(data){
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

  searchImage(query: string) {
    this.searching = true; // delay to load image
    return this.imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => console.log(error),
      () => this.searching = false
    )
  }

}
