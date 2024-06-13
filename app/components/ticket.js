import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TicketComponent extends Component {
  @tracked qty = 0;

  @action increaseQty() {
    this.qty++;
  }

  @action decreaseQty() {
    this.qty > 0 ? this.qty-- : this.qty;
  }
}
