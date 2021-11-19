import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubs : Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.checkParams();
  }

  checkParamsAlt() {
    this.user = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name']
    };
  }

  checkParams() {
    this.checkParamsAlt()
    this.activatedRoute.params.subscribe(
      params => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    )
  }

  ngOnDestroy(): void {
    //this is already handling by Angular but its for learning the kitchen.
    //this.paramsSubs.unsubscribe();
  }

}
