import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const getDelay = ({ delay }) => delay || 0;
const getDuration = ({ duration }) => duration || 500;
const getTimingFunction = ({ timingFunc }) => timingFunc || 'ease-out';

// TransitionFade is default transition component using
// opacity and visibility.
export const TransitionFade = styled.div`
  ${(props) =>
    (props.transition ?
      css`
      transition: visibility ${getDuration}ms ${getTimingFunction} ${getDelay}ms,
        opacity ${getDuration}ms ${getTimingFunction} ${getDelay}ms;
      ` : '')}

  ${(props) =>
    (props.animation ?
      css`
        animation: ${fadeInKeyframes} ${getDuration}ms ${getTimingFunction} ${getDelay}ms;
      ` : '')}

  ${(props) =>
    (props.visible
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `)}
`;

export const UNMOUNTED = 'unmounted';
export const EXIT = 'exit';
export const ENTER = 'enter';

export class TransitionWithoutForwardingRef extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: UNMOUNTED,
      initiallyVisible: !props.hidden,
    };
  }

  componentDidMount() {
    const { initiallyVisible } = this.state;
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ status: initiallyVisible ? ENTER : EXIT });
  }

  componentDidUpdate(prevProps) {
    let nextStatus = null;
    if (prevProps !== this.props) {
      const { status } = this.state;

      if (this.props.hidden) {
        if (status === ENTER) {
          nextStatus = EXIT;
        }
      } else if (status === EXIT) {
        nextStatus = ENTER;
      }
    }
    if (nextStatus != null) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ status: nextStatus });
    }
  }

  render() {
    const {
      innerRef,
      TransitionComponent,
      children,
      noExit,
      noEnter,
      noInitialEnter,
      ...transitionProps
    } = this.props;

    const { status, initiallyVisible } = this.state;

    delete transitionProps.hidden; /* We can't use `hidden` as it just hides element */

    transitionProps.visible = status === ENTER ? 1 : 0;
    transitionProps.animation = initiallyVisible && !noInitialEnter && !noEnter;
    transitionProps.transition =
      ((status === ENTER) && !noEnter) ||
      ((status === EXIT) && !noExit)
        ? 1
        : 0;

    return (
      <TransitionComponent ref={innerRef} {...transitionProps}>
        {children}
      </TransitionComponent>
    );
  }
}

TransitionWithoutForwardingRef.defaultProps = {
  TransitionComponent: TransitionFade,
  // You can use `transitionComponentProps` to pass props to transition
  // component in order to customize it.
  transitionComponentProps: {},
};

export const Transition = React.forwardRef((props, ref) => (
  <TransitionWithoutForwardingRef innerRef={ref} {...props} />
));
