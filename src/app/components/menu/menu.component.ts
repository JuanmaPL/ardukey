import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { menuOpts } from 'src/app/interfaces/interfaces';
import { MenuOptsService } from 'src/app/services/menu-opts.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  opcionesMenu: Observable<menuOpts[]> | undefined;

  constructor(private menuOptsService: MenuOptsService) { }

  ngOnInit() {
    this.opcionesMenu = this.menuOptsService.getMenuOptions();
  }

}
