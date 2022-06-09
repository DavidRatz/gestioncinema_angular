import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { USER_CONNEXION_FORM, USER_INSERT_FORM } from 'src/app/forms/user.form';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {


  listUser !: User[];
  @Output('user')
  userEmitter = new EventEmitter<User>();

  user?: User;

  connexionForm !: FormGroup;
  signUpForm !: FormGroup;

  constructor(private builder: FormBuilder, private userService: UsersService) {
    this.connexionForm = builder.group(USER_CONNEXION_FORM);
    userService.userObs.subscribe({
      next: user => this.user = user,
    });
    this.signUpForm = builder.group(USER_INSERT_FORM);
    userService.userObs.subscribe({
      next: user => this.user = user,
    });
  }

  ngOnInit(): void {}

  getUsers(){
    this.userService.getUsers().subscribe({
      next :user =>this.listUser = user,
      error : err => alert("echec"),
      complete: () => console.log("complete")
    })
  }

  onSubmit(){
    this.user = this.userService.connection(this.connexionForm.value);
    this.userEmitter.emit(this.user);
  }

  onSignUp(){
    if( this.signUpForm.valid ){
      this.user = this.signUpForm.value;
      if(this.user)
      this.register(this.user);
    }
  }

  register(user: User){
    
    this.userService.register(user)
      .subscribe(() => this.getUsers())
  }
}
