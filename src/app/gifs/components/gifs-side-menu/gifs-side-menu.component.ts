import { Component } from '@angular/core';
import { GifsSideMenuHeaderComponent } from "../gifts-side-menu-header/gifs-side-menu-header.component";
import { GifsSideMenuOptionsComponent } from "../gifts-side-menu-options/gifs-side-menu-options.component";

@Component({
  selector: 'app-gifs-side-menu',
  imports: [GifsSideMenuHeaderComponent, GifsSideMenuOptionsComponent],
  templateUrl: './gifs-side-menu.component.html',
})
export class GifsSideMenuComponent { }
