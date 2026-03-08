import { HttpClient } from '@angular/common/http';
import { Component, inject, resource } from '@angular/core';
import { filter, from, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-basic',
  standalone: false,
  templateUrl: './rxjs-basic.component.html',
  styleUrl: './rxjs-basic.component.css'
})
export class RxjsBasicComponent {

  noList$ = of([11,2,13,4,65,7,8,8,55,6])

  http = inject(HttpClient)

  // cityList: string[] = ['sfg', 'sdf', 'wrt']

  // cityList$ = of(this.cityList)

  // cityList2$ = from(this.cityList)

  constructor(){

    this.http.get("https://jsonplacehoder.typicode.com/users").subscribe((res: any) =>{
      console.log(res)
    })

    // this.cityList$.subscribe((data: string[]) => {
    //   console.log(data)
    // })

    // this.cityList2$.subscribe((data: string) => {
    //   console.log(data)
    // })

    // const myObs$ = new Observable(value =>{
    //   value.next("This is demo text")
    // });

    // myObs$.subscribe(message=>{
    //   console.log(message);
    // })

    // this.noList$.pipe(
    //   filter(num => num % 2 == 0)
    // ).subscribe((res:number)=>{
    //   console.log(res)
    // })

    // this.noList$.pipe(
    //   map((res) => res.filter(m => m%2 == 0))
    // ).subscribe((result) =>{
    //   console.log(result)
    // })

  }

}
