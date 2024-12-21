import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicListComponent } from './components/music-list/music-list.component';

const routes: Routes = [
  { path: '', component: MusicListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}