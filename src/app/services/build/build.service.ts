import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Build } from '../../models/build.model';

@Injectable()
export class BuildService {

    constructor(private http: HttpClient) { }

    saveBuild(build: Build): Observable<Build> {
        return this.http.post<Build>('http://localhost:8000/api/builds/', build);
    }

    getAllBuilds(): Observable<Build[]> {
        return this.http.get<Build[]>('http://localhost:8000/api/builds');
    }
}
