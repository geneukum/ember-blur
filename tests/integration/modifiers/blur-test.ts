import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import type { TestContext } from '@ember/test-helpers';

const defaultBlurredCfg = {
    filter: 'blur(1.5px)',
    opacity: '0.5',
    pointerEvents: 'none',
    transition: 'all 0.2s linear 0s',
    userSelect: 'none',
  },
  defaultClearCfg = {
    filter: 'none',
    opacity: '1',
    pointerEvents: 'auto',
    transition: 'all 0.2s linear 0s',
    userSelect: 'auto',
  };

interface BlurTestContext extends TestContext {
  customFilter?: string;
  customOpacity?: string;
  customTransition?: string;
}

module('Integration | Modifier | blur', function (hooks) {
  setupRenderingTest(hooks);

  test('it adds a default blurred styling when shouldBlur is true', async function (assert) {
    await render(hbs`<div data-test-div {{blur shouldBlur=true}}></div>`);

    assert.dom('[data-test-div]').hasStyle({
      ...defaultBlurredCfg,
    });
  });

  test('it removes a default blurred styling when shouldBlur is false', async function (assert) {
    await render(hbs`<div data-test-div {{blur shouldBlur=false}}></div>`);

    assert.dom('[data-test-div]').hasStyle({
      ...defaultClearCfg,
    });
  });

  test('it supports a custom opacity', async function (this: BlurTestContext, assert) {
    this.set('customOpacity', '0.75');

    await render(
      hbs`<div data-test-div {{blur opacity=this.customOpacity}}></div>`
    );

    assert.dom('[data-test-div]').hasStyle({
      ...defaultBlurredCfg,
      opacity: this.customOpacity,
    });
  });

  test('it supports a custom filter', async function (this: BlurTestContext, assert) {
    this.set('customFilter', 'blur(3px)');

    await render(
      hbs`<div data-test-div {{blur filter=this.customFilter}}></div>`
    );

    assert.dom('[data-test-div]').hasStyle({
      ...defaultBlurredCfg,
      filter: this.customFilter,
    });
  });

  test('it supports a custom transition', async function (this: BlurTestContext, assert) {
    this.set('customTransition', 'all 1s ease 1s');

    await render(
      hbs`<div data-test-div {{blur transition=this.customTransition}}></div>`
    );

    assert.dom('[data-test-div]').hasStyle({
      ...defaultBlurredCfg,
      transition: this.customTransition,
    });
  });
});
