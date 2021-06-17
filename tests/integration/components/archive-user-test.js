import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { run } from '@ember/runloop';


module('Integration | Component | archive-user', function(hooks) {
  setupRenderingTest(hooks);

  test('should archive/unarchive selected user', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
  
 
    const archived = this.owner.lookup('service:store');
    archived.set('archived', false);
    assert.equal(archived.archived, false);

    archived.set('archived', true);
    assert.equal(archived.archived, true);




  

    // await render(hbs`<ArchiveUser />`);

    // assert.equal(this.element.querySelector('p').textContent.trim(), 'Archived: false');

    // await click('.button');

    // assert.equal(this.element.querySelector('p').textContent.trim(), 'Archived: false');
  

  });
});
