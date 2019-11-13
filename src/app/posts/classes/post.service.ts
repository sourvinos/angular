import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from './post.model';

@Injectable({ providedIn: 'root' })

export class PostService {

    posts: IPost[] = []
    url: string = 'https://jsonplaceholder.typicode.com/posts'

    constructor(private http: HttpClient) { }

    getPosts(userId: number) {
        return this.http.get<IPost[]>(this.url + '?userId=' + userId)
    }

}