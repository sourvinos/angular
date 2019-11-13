import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from './post.model';

@Injectable({ providedIn: 'root' })

export class PostService {

    posts: IPost[] = []
    url: string = 'https://jsonplaceholder.typicode.com/posts'

    constructor(private http: HttpClient) { }

    getPosts(userId: number) {
        console.log('Inside the service, getting posts')
        return this.http.get<IPost[]>(this.url + '?userId=' + userId)
    }

    getPost(postId: number) {
        return this.http.get<IPost>(this.url + '?id=' + postId)
    }

    updatePost(id: number, formData: IPost): Observable<IPost> {
        return this.http.put<IPost>(this.url + '/' + id, formData)
    }

}