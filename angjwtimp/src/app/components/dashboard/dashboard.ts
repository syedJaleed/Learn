import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Post } from '../models/posts.model';
import { Posts } from '../services/posts';
import { Router } from '@angular/router';
import { Loginservice } from '../authservice/loginservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  posts: Post[] = [];
  loading = false;
  error = '';
  success = '';

  postForm!: FormGroup;

  constructor(
    private postService: Posts,
    private router: Router,
    private auth: Loginservice,
    private changeDetectorRef: ChangeDetectorRef,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.fetchPosts();
    this.validateCreatePostForm()
  }

  validateCreatePostForm() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required]],
      published: [true],
    });
  }

  canDeactivate(): boolean {
    if (this.postForm.dirty) {
      return confirm('You have unsaved changes. Leave?');
    }
    return true;
  }
  goToUser(){
    this.router.navigate(["/user"])
  }

  createPostSubmit() {
    if (this.postForm.invalid) {
      this.postForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = '';
    this.success = '';

    this.postService.createPost(this.postForm.value).subscribe({
      next: (res) => {
        this.success = 'Post created successfully';
        this.loading = false;
        this.postForm.markAsPristine();
        // reset form
        this.postForm.reset({ published: true });
      },
      error: (err) => {
        this.loading = false;
        this.error = this.getErrorMessage(err);
      },
    });
  }

  getErrorMessage(err: any): string {
    if (err.status === 400) return 'Invalid input data';
    if (err.status === 401) return 'Unauthorized. Please login again';
    return 'Something went wrong';
  }

  get title() {
    return this.postForm.get('title');
  }

  get content() {
    return this.postForm.get('content');
  }

  fetchPosts() {
    this.loading = true;
    this.error = '';

    this.postService.getPosts().subscribe({
      next: (res) => {
        this.posts = res;
        console.log(res);
        this.loading = false;
        this.changeDetectorRef.detectChanges();
      },
      error: (err) => {
        this.loading = false;

        if (err.status === 401) {
          this.error = 'Session expired. Please login again.';
          this.auth.logout();
          this.router.navigate(['/login']);
        } else {
          this.error = 'Something went wrong. Please try again.';
        }

        this.changeDetectorRef.detectChanges();
      },
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
