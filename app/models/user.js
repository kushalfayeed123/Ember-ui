import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') image;
  @attr('boolean', { defaultValue: false }) value;
  @attr('boolean', { defaultValue: false }) archived;

  changeValue() {
    this.value = !this.value;
  }

  toggleArchive(id, isArchived) {
    try {
      this.store.findRecord('user', id).then((user) => {
        // ...after the record has loaded
        user.archived = isArchived ? false : true;
        user.save();
        console.log(user.archived);
      });
    } catch (e) {
      // console.log(e);
    }
  }
}
