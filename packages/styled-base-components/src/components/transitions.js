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

// TransitionFade is default transition component using opacity and
// visibility.
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
export const EXITED = 'exited';
export const ENTERING = 'entering';
export const ENTERED = 'entered';
export const EXITING = 'exiting';

export class Transition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: UNMOUNTED,
      initiallyVisible: props.visible,
    };
  }

  componentDidMount() {
    const { initiallyVisible } = this.state;
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ status: initiallyVisible ? ENTERING : EXITED });
  }

  componentDidUpdate(prevProps) {
    let nextStatus = null;
    if (prevProps !== this.props) {
      const { status } = this.state;

      if (this.props.visible) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else if (status === ENTERING || status === ENTERED) {
        nextStatus = EXITING;
      }
    }
    if (nextStatus != null) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ status: nextStatus });
    }
  }

  render() {
    const {
      TransitionComponent,
      children,
      noExit,
      noEnter,
      noInitialEnter,
      ...transitionProps
    } = this.props;

    const { status, initiallyVisible } = this.state;

    transitionProps.visible = status === ENTERED || status === ENTERING ? 1 : 0;
    transitionProps.animation = initiallyVisible && !noInitialEnter && !noEnter;
    transitionProps.transition =
      ((status === ENTERED || status === ENTERING) && !noEnter) ||
      ((status === EXITING || status === EXITED) && !noExit)
        ? 1
        : 0;

    return (
      <TransitionComponent {...transitionProps}>{children}</TransitionComponent>
    );
  }
}

Transition.defaultProps = {
  TransitionComponent: TransitionFade,
  // You can use `transitionComponentProps` to pass props to transition
  // component in order to customize it.
  transitionComponentProps: {},
};
