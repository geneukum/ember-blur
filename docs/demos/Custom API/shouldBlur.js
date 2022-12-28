import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BlurComponent extends Component {
  @tracked
  shouldBlur = true;

  @action
  toggleBlur() {
    this.shouldBlur = !this.shouldBlur;
  }
}
