import Modifier, { NamedArgs, PositionalArgs } from 'ember-modifier';

interface BlurModifierSignature {
  Args: {
    Named: {
      filter?: string;
      opacity?: string;
      shouldBlur?: boolean;
      transition?: string;
    };
  };
  Element: HTMLElement;
}

export default class BlurModifier extends Modifier<BlurModifierSignature> {
  modify(
    element: HTMLElement,
    _: PositionalArgs<BlurModifierSignature>,
    named: NamedArgs<BlurModifierSignature>
  ) {
    const {
      filter = 'blur(1.5px)',
      opacity = '0.5',
      shouldBlur = true,
      transition = 'all .2s linear',
    } = { ...named };

    element.style.opacity = shouldBlur ? opacity : '1';
    element.style.filter = shouldBlur ? filter : 'none';
    element.style.transition = transition;
    element.style.pointerEvents = shouldBlur ? 'none' : 'auto';
    element.style.userSelect = shouldBlur ? 'none' : 'auto';
  }
}
