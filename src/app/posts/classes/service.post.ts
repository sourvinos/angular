import { HttpClient } from '@angular/common/http';
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
        // console.log('Inside the service, getting posts')
        return this.http.get<IPost[]>(this.url + '?userId=' + userId)
    }

    getPost(postId: number) {
        return this.http.get<IPost>(this.url + '?id=' + postId)
    }

    updatePost(postId: number, formData: IPost) {
        console.log('Inside the service, saving post')
        return this.http.put<IPost>(this.url + '/' + postId, formData)
    }

}