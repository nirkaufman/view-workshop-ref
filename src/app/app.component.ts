import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ForMapDirective} from "./demo_direcitives/part_5_embedded_views/for-map.directive";
import {Card, CardTypes} from "./demo_direcitives/part_5_embedded_views/card_deck/cards-types";
import {CardDeckDirective} from "./demo_direcitives/part_5_embedded_views/card_deck/card-deck.directive";

interface ViewContext {
  $implicit: string;
  color: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardDeckDirective],
  template: `
          <div class="container m-5">

          <h1>Welcome to {{titleContent}}!</h1>

          <ng-container *cardDeck="let card for cards; primary customPrimary"></ng-container>

          <ng-template #customPrimary let-card>
              <h5>bla bla bla</h5>
          </ng-template>
      </div>
  `,
})
export class AppComponent {
  titleContent = 'view-workshop-ref';
  person = {name: 'nir', age: 42};

  cards: Card[] = [
    {
      type: CardTypes.Plain,
      title: "The title",
      text: "The Text"
    },
    {
      type: CardTypes.Plain,
      title: "Another title",
      text: "another text to render"
    },
    {
      type: CardTypes.Primary,
      title: "What else",
      text: "The Text The Text The Text",
      header: 'Im The header',
      smallText: 'and some small text'
    },

  ]

}
