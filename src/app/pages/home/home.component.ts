import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/youtube.models';
import { YoutubeService } from 'src/app/services/youtube.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // APIKEY = AIzaSyAoJb77Sdxk4yR8FFMlvR3NSiEFXNztv7I

  videos: Video[] = [];

  constructor( private readonly youTubeSvc: YoutubeService ) { }

  ngOnInit(): void {
    this.cargarVideos();
  }

  cargarVideos() {
    this.youTubeSvc.getVideos().subscribe( resp => {

      this.videos.push( ...resp )
      console.log(this.videos);
      
      
    });
  }

  mostrarVideo( video: Video ) {

    Swal.fire({
      html: `
      <h4> ${ video.title } </h4>
      <hr>
      <iframe width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/${ video.resourceId.videoId }" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture" 
              allowfullscreen>
      </iframe>
      `
    })
    
  }

}
