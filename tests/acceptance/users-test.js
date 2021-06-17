import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';


module('Acceptance | users', function(hooks) {
  setupApplicationTest(hooks);

  
  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');


    assert.dom('.button').hasText('See all users');
    await click('.button');
    assert.equal(currentURL(), '/users');
  });

  test('visiting /users', async function(assert) {
    await visit('/users');

    assert.equal(currentURL(), '/users');


    await click('.link');
    assert.equal(currentURL(), '/users/1');
  });

  test('visiting users/1', async function(assert) {
    await visit('users/1');

    assert.equal(currentURL(), 'users/1');


    assert.equal(this.element.querySelector('p').textContent.trim(), 'Albert Einstein');
    assert.dom('.subtitle').hasText('Archived: false');
    assert.dom('.is-pulled-left').hasText('Archive');
    await click('.is-pulled-left')
    assert.dom('.subtitle').hasText('Archived: true');
    assert.dom('.is-pulled-left').hasText('Unarchive');


    assert.dom('.button').hasText('Back to users');
    await click('.button')
    assert.equal(currentURL(), '/users');
    

 
  });

});
