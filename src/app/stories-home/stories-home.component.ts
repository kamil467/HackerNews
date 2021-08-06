import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreyItem } from '../interfaces/StoryItem';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-stories-home',
  templateUrl: './stories-home.component.html',
  styleUrls: ['./stories-home.component.scss']
})
export class StoriesHomeComponent implements OnInit {
 
  p:number = 1;
  count:number = 10;
  
  newsList:Observable<StoreyItem[]>;

  constructor(private newsService:NewsapiService) { }

  ngOnInit(): void {
    this.newsList = this.newsService.getAllStories();

  }
   
}
