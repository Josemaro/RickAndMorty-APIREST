import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interface/character.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters(query='', page=1){
    const filter = `${environment.baseUrlApi}character/?name=${query}&page=${page}`
    return this.http.get<Character[]>(filter);
  }
  getDetails(id: number){
    const filter = `${environment.baseUrlApi}character/${id}`
    return this.http.get<Character>(filter)
  }
}
