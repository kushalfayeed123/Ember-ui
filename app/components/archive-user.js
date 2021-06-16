import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ArchiveUserComponent extends Component {
  @tracked data = this.args.data;

  @action
  async toggleArchive() {
    this.data.toggleArchive(this.data.id, this.data.archived);
  }
}
