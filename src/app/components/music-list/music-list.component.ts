import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {
  songs: any[] = [];

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.musicService.getSongs().subscribe((data) => {
      this.songs = data;
    });
  }

  playSong(song: any): void {
    console.log(`Playing: ${song.title}`);
    // Add logic to play the song
  }

  stopSong(song: any): void {
    console.log(`Stopping: ${song.title}`);
    // Add logic to stop the song
  }
}