import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountService} from '../services/account.service';
import {LoggingService} from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent implements OnInit {

  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(
    private accountService: AccountService) {
  }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // Alternative Data Sharing
    // Data Sender Side (Creator)
    this.accountService.statusUpdated.emit(status);
  }
}
