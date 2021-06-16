import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UsersUserController extends Controller {
  @action
  async modifyArchive() {
    this.model.toggleArchive();
  }
}
