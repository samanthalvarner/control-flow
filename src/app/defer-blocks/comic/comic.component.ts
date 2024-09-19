import { AsyncPipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MarvelService } from 'src/app/services/marvel.service';
import { MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-comic',
  standalone: true,
  imports: [AsyncPipe, MatExpansionModule],
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.scss'
})
export class ComicComponent implements OnInit {
  comics$: Observable<any> | undefined;
  @Input() id: any;
  constructor(private marvelService: MarvelService) { }
  ngOnInit(): void {
    this.comics$ = this.marvelService.getCharacterComicsById(this.id).pipe(
      map((response: any) => response.data.results),
    );
  }
}
