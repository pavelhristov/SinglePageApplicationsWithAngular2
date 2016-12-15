import { Response } from '@angular/http';

function getAllMoveis() {
    this.http.get(['../data/movies.json'])
    .map((res: Response) => res.json()) // Map will change your response ot json()
    .subscribe(
        // research how to populate the movies in **this.movies**
    );
}
