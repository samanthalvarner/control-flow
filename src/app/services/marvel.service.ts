import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  marvelKey = environment.MARVEL_KEY;
  constructor(private http: HttpClient) { }
  getCharacters(): Observable<any>{
    return this.http.get<any>(`
      https://gateway.marvel.com:443/v1/public/characters?apikey=${this.marvelKey}&limit=10`
      );
  }

  getCharacterComicsById(id: number): Observable<any>{
    return this.http.get<any>(`
      https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=${this.marvelKey}`
    );
  }

  getCharacterById(id: number): Observable<any>{
    return this.http.get<any>(`
      https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${this.marvelKey}`
    );
  }
}
