import { Component, OnInit } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  selector: "social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: "this is a title",
      thought: "this is a thought"
    },
    {
      title: "this is a title2",
      thought: "this is a thought2"
    },
    {
      title: "this is a title3",
      thought: "this is a thought3"
    },
    {
      title: "this is a title4",
      thought: "this is a thought4"
    }
  ];

  deletePost(index: number): void {
    this.posts.splice(index, 1);
  }

  onAddHandler(newPost: object): void {
    this.posts.push(newPost);
    this.toggleForm();
  }
  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  constructor() {}

  ngOnInit() {}
}
