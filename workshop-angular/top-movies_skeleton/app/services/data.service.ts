import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    getTopMoveis() {
        return this.http.get('../data/movies.json')
            .map((res: Response) => res.json());
    }
}
