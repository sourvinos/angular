import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IPost } from './post.model';
import { PostService } from './post.service';

@Injectable({ providedIn: 'root' })

// Prefetch data with resolver to avoid partial page update while waiting for the api to load the data
// Step 1 This class!
// Step 2 Add it to the routes modules
// Step 3 Modify the constructor of the list component and remove the service 
// Step 4 In the app component define the loader

export class PostListResolverService implements Resolve<IPost[]>{

    constructor(private postService: PostService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> {
        console.log('Inside resolver')
        return this.postService.getPosts(route.params.userId)
    }

}