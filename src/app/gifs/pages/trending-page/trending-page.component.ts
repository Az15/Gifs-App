import { Component } from '@angular/core';
import { GifsListComponent } from "../../components/gifs-list/gifs-list.component";

@Component({
  selector: 'gifs-trending-page',
  imports: [GifsListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent { }
