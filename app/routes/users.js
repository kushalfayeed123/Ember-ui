import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  model() {
    return this.store.findAll('user')
    // .then(results => results.filter((unarchived) => {
    //   return unarchived.get('archived') === false;
    // }));
  }

}
