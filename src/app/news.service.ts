import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class NewsService {

	articles: any[] = [];

  constructor(private _http: Http){ }

  getNews(source: string){
  	this._http.get(`https://newsapi.org/v1/articles?source=${source}&apiKey=74f00375381343868c18c9c41924903e`).subscribe(
  	  (response) => {
  	  	console.log('res: ', response._body);
  	  },
  	  (err) => console.log(err)
 );
