import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Notification } from 'src/app/entities/notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  closeResult = '';
  userID: number;
  notifications: Notification[];

  @Input() signal: Observable<boolean>;
  @ViewChild('content', { static: true }) modal: ElementRef;

  constructor(private modalService: NgbModal, private api: ApiService) {
    this.notifications = [];
  }

  ngOnInit(): void {
    this.userID = JSON.parse(localStorage.getItem('userData')).ID;

    this.signal.subscribe( didActivate => {
      console.log('Signal From Navbar, Notifications should appear for user :' + this.userID);
      this.open(this.modal);
      this.api.getNotifications(this.userID).subscribe( data => {
        data.forEach(notif => {
          this.notifications.push(notif);
        });
      });
    });
  }

  showstate() {
    console.log('notifications' + this.signal);
  }

  open(content) {
    this.modalService.open(content, { scrollable: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
