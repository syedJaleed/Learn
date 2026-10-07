import { HttpClient } from '@angular/common/http';
import { Component, inject, resource } from '@angular/core';
import {
  exhaustMap,
  filter,
  forkJoin,
  from,
  interval,
  map,
  Observable,
  of,
  Subject,
  switchMap,
  take,
} from 'rxjs';
import { User } from '../../services/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rxjs-basic',
  standalone: false,
  templateUrl: './rxjs-basic.html',
  styleUrl: './rxjs-basic.css',
})
export class RxjsBasic {
  userService = inject(User);

  myRollList$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  myRollNo$ = of([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  timeInterval = interval(1000);

  userId: number = 0;

  stateData$ = of(['MP', 'MH', 'Goa']);

  cityData$ = of(['Pune', 'Nagpur', 'Mumbai', 'Solapur']);

  searchControl: FormControl = new FormControl();

  userForm!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {

    //5

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      subscribe: [false],
      email: [''],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      age: [''],
      drivingLicense: [''],
      country: [''],
      currency: [''],
      search: ['']
    })

    //4

    const $users = this.http.get('https://jsonplaceholder.typicode.com/users');
    const $posts = this.http.get('https://jsonplaceholder.typicode.com/posts');

    // forkJoin([this.stateData$, this.cityData$]).subscribe((res:any) => {
    //   console.log(res);
    // })

    // forkJoin([$users, $posts]).subscribe((res: any) =>{
    //   console.log(res);
    // }, error =>{
    //   console.log(error);
    // })

    // this.searchControl.valueChanges.subscribe((search: string)=>{

    //   this.http.get(`https://dummyjson.com/products/search?q=/${search}`).subscribe((res:any)=>{
    //     console.log(search, res);
    //   })

    // })

    this.searchControl.valueChanges
      .pipe(
        switchMap((search: string) =>
          this.http.get(`https://dummyjson.com/products/search?q=/${search}`),
        ),
      )
      .subscribe((res: any) => {
        console.log(res);
      });

    // const myObs$ = new Observable((data) => {
    //   data.next('this is an observable');
    // });

    // myObs$.subscribe((message) => {
    //   console.log(message);
    // });

    // this.timeInterval.pipe(
    //   take(6)
    // ).subscribe(value =>{
    //   console.log(value);

    // })

    // this.userService.getUsers().subscribe((res: any) => {
    //   console.log(res);
    // });

    // this.userService.getParticularUser().subscribe((message:any )=>{
    //     console.log(message);

    // });

    // this.myRollList$.subscribe(res => {
    //   console.log(res)
    // })

    //   this.myRollNo$.pipe(
    //     map((result) => result.filter(r => r % 2 == 0))
    //   ).subscribe(res => {
    //     console.log(res)
    //   })

    // }
    this.loginClick.pipe(
      exhaustMap(() => {
        return this.http.get('https://jsonplaceholder.typicode.com/users')
      })
    ).subscribe((res: any) =>{
      console.log(res);

    });
  }
  getUser() {
    this.userService.getUsers4().subscribe((data: any) => {
      console.log(data);
    });
  }
  getPosts() {
    this.userService.getPosts().subscribe((data: any) => {
      console.log(data);
    });
  }

  loginClick = new Subject<void>();

  onButtonClick(){
    this.loginClick.next()
  }

  submitForm(){
    this.userForm.valueChanges.subscribe((res:any) =>{
      console.log(res)
    })
  }
}
