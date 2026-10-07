import { map, Subject, filter, Observable, shareReplay } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class User {
  http = inject(HttpClient);

  newSub = new Subject<string>();

  private userDetails = new Map<number, Observable<any>>();

  constructor() {}

  callNewSubb() {
    return this.newSub.next('text');
  }

  getUserById(id: number) : any | undefined{
    if (!this.userDetails.has(id)) {
      const userData = this.http
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .pipe(shareReplay(1));
      this.userDetails.set(id, userData);
      console.log('from service',this.userDetails.set(id, userData));
    }
    return this.userDetails.get(id);
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((users: any) =>
        users.map((user: any) => {
          return { id: user.id, name: user.name };
        }),
      ),
    );
  }

  getParticularUser() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users/2')
      .pipe(map((userdata: any) => userdata.address));
  }

  getFilteredUsers() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((users: any) => users.filter((user: { id: number }) => user.id % 2 == 0)));
  }

  //4
  getUsers4() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }


}
