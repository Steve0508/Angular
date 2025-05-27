import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';


@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {


  constructor(private router:Router)
  {}
  loginData(){
    //this.router.navigateByUrl('/structural-directive');
    this.router.navigate(['/structural-directive'])
  }
}