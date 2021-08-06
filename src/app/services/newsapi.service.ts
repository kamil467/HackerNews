import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, merge, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StoreyItem } from '../interfaces/StoryItem';
import { concatAll, concatMap, mergeMap, take, toArray } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }
  
  getListTopStories():Observable<number[]>
  {
  
    return this.http.get<number[]>(environment.newsAPIList);
  }

  getStoryById(id:number):Observable<StoreyItem>
  {
    return this.http.get<StoreyItem>(environment.newsAPIById+id+".json?print=pretty");

  }
 
  getAllStories():Observable<StoreyItem[]>
  {
  var result =  this.getListTopStories()
                .pipe(concatMap(items => from(items)
                .pipe(mergeMap(item => 
                  this.getStoryById(item)
                  ))
                  
                  ),toArray());
                
     return result;           

    
  }

}
