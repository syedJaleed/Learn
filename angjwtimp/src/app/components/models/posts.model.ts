export interface Post {
  title: string;
  content: string;
  published: boolean;
}

export interface CreatePostRequest {
  title: string;
  content: string;
  published: boolean;
}

export interface PostResponse {
  id: number;
  title: string;
  content: string;
  published: boolean;
  created_at: string;
}
