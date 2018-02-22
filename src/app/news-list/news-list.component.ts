import { Component, OnInit } from '@angular/core';
import { NewsService } from './../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

	newSource = { source:''};

	sources: object[] = [
	   {name: 'ABC News (AU)', value: 'abc-news-au'},
	   {name: 'Al Jazeera English', value: 'al-jazeera-english'},
	   {name: 'Kashaer BBC', value: 'kashaer-bbc'},

	];

  constructor(private _newsService: NewsService) { }

  ngOnInit() {
  }

  getNews(){
  	this._newsService.getNews(this.newSource.source);
  	//console.log(this.newSource);
  }
}
