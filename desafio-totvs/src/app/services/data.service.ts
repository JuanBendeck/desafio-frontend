import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class DataService {
    private URL_API = "https://restcountries.com/v2/all";
    constructor (private http: HttpClient){}

    getAllCountries(): Observable<any[]>{
        return this.http.get<any[]>(this.URL_API);
    }
}