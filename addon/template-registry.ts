import type BlurModifier from 'ember-blur/modifiers/blur';

export default interface Registry {
  blur: typeof BlurModifier;
}
