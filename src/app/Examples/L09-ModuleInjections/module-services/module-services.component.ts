import {Component, OnInit} from '@angular/core';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-module-services',
  templateUrl: './module-services.component.html',
  styleUrls: ['./module-services.component.css'],
  providers:[]
})
export class ModuleServicesComponent implements OnInit {

  accounts: { name: string, status: string }[] = [];

  constructor(
    private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
