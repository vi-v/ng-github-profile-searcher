import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id:string = '2c339f202ab6eb513a7a';
    private client_secret = '690636cb52ac80d67a6d4751fdc2758eb92116ec';

    constructor(private _http: Http) {
        console.log('Github Service Ready ...');
        this.username = 'vi-v';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUser(username: string) {
        this.username = username;
    }
}