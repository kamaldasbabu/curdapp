import { PostsService } from './../posts.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post/post.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit, OnDestroy {
  posts: Post[]=[];
  
  constructor(public  postService: PostsService) { 
   
  }
  private postsSub: Subscription;
  
  ngOnInit(){
    this.postService.getPosts();
    this.postsSub=this.postService.getPostUpdateListener()
    .subscribe((posts: Post[])=> {
      this.posts = posts;
      console.log(this.posts);
    });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  onDeletePost(id: any) {
    let myid = JSON.stringify(id);
    console.log("myid ",myid);
    this.postService.deletePost(myid);
    console.log("id ",id);
  }

}
