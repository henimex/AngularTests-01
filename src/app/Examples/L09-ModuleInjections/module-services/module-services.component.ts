import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-module-services',
  templateUrl: './module-services.component.html',
  styleUrls: ['./module-services.component.css']
})
export class ModuleServicesComponent implements OnInit {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAccountAdded(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: { id: number, newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
