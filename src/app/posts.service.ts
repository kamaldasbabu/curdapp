import { Injectable, Component } from '@angular/core';
import {Post} from './post/post.model';
import {Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

private posts: Post[] = [];
constructor(private http: HttpClient) { }
private postsUpdated = new Subject<Post[]>();

getPosts (){
  
  this.http
  .get<{ message: string, posts: Post[]}>('http://localhost:3000/api/readposts')
    .subscribe((postData)=> {
      this.posts = postData.posts;
      this.postsUpdated.next([...this.posts]);
  }); 
}
getPostUpdateListener(){
  return this.postsUpdated.asObservable();
}

addPost(title:string, content: string){
  const post: Post = {id: null, title: title, content: content};
  this.http.post<{message: string}>('http://localhost:3000/api/createpost', post)
    .subscribe(responseData => {
      console.log("Ang "+responseData.message);
      this.posts.push(post);
      this.postsUpdated.next([...this.posts])
    })
}

deletePost( id: any) {
   return this.http.delete(`http://localhost:3000/api/deletepost/${id}`).subscribe(
     res => {
       console.log("res aferter delete "+res);
     }
   )
}
 
}
