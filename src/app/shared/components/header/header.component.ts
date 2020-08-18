import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavService, Menu } from '../../services/nav.service';
import { CustomizerService } from '../../services/customizer.service';

var body = document.getElementsByTagName("body")[0];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menuItems: Menu[];
  public items: Menu[];
  public text: string;
  public openNav: boolean = false;
  public openToggle: boolean = false;
  public open : boolean = false;

  @Output() rightSidebarEvent = new EventEmitter<boolean>();
  @Output() toggleEvent = new EventEmitter<boolean>();

  constructor(public navServices: NavService, public customize: CustomizerService){
  }

  ngOnInit() {
    this.navServices.items.subscribe(menuItems => {
      this.items = menuItems
    });
  }

  openHeaderMenu(){
    this.open = !this.open;
  }

  openMobileNav() {
    this.openNav = !this.openNav;
  }

  switchToggle() {
    console.log("Togglr");
    this.openToggle = !this.openToggle;
    this.toggleEvent.emit(this.openToggle);
  }

}
