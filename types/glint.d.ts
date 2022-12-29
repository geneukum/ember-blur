import '@glint/environment-ember-loose';
import type BlurModifier from 'ember-blur/modifiers/blur';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    blur: typeof BlurModifier;
  }
}
