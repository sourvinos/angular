import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from './model.post';

@Injectable({ providedIn: 'root' })

export class PostService {

    // npm install -g json-server
    // json-server --watch posts.json
    // url: string = 'https://jsonplaceholder.typicode.com/posts'

    posts: IPost[] = []
    url: string = 'http://localhost:3000/posts'

    constructor(private http: HttpClient) { }

    getPosts(userId: number) {
        console.log('Inside the service, getting posts')
        return this.http.get<IPost[]>(this.url + '?userId=' + userId)
    }

    getPost(postId: number) {
        return this.http.get<IPost>(this.url + '?id=' + postId)
    }

    updatePost(post: IPost) {
        console.log('Updating', post)
        return this.http.put<void>(`${this.url}/${post.id}`, post, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }

}