import Component from '@glimmer/component';
import { action } from '@ember/object';
// import { tracked } from '@glimmer/tracking';

export default class ArchiveUserComponent extends Component {
  @action
  async toggleArchive(id, archived) {
    this.args.data.toggleArchive(id, archived);
  }
}
