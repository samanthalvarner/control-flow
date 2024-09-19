import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) { }
  getCharacters(): Observable<any>{
    return this.http.get<any>(`
      https://gateway.marvel.com:443/v1/public/characters?apikey=bbc2211b6b95a28e2190561db8e6a0e2&limit=10`
      );
  }

  getCharacterComicsById(id: number): Observable<any>{
    return this.http.get<any>(`
      https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=bbc2211b6b95a28e2190561db8e6a0e2`
    );
  }

  getCharacterById(id: number): Observable<any>{
    return this.http.get<any>(`
      https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=bbc2211b6b95a28e2190561db8e6a0e2`
    );
  }
}
