import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ArchiveUserComponent extends Component {
  get isArchived() {
    return this.args.data.archived;
  }

  @action
  async toggleArchive(data) {
    data.toggleArchive(data.id, data.archived);
  }
}
