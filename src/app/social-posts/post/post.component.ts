import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "src/app/interfaces/post";

@Component({
  selector: "post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input() individualPost: Post;
  @Input() index: number;
  @Output() delete = new EventEmitter<any>();

  deletePost(index: number): void {
    this.delete.emit(index);
  }
  constructor() {}

  ngOnInit() {}
}
