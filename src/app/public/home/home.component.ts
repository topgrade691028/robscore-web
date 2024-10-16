import {
  Component,
  OnInit
} from '@angular/core';
import {Route, Router} from '@angular/router';

import { AppState } from '../../app.service';
import { Title } from './title';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    Title
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.scss' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  /**
   * Set our default values
   */
  public logo = 'assets/img/logo-dark.svg';
  /**
   * TypeScript public modifiers
   */
  constructor(private router: Router
  ) {}

  public ngOnInit() {
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }
}
