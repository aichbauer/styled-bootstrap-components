import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Utilities } from './utilityStyle';

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
  ${Utilities}

  ${(props) =>
    (props.transition ?
      css`
      transition: visibility ${getDuration}ms ${getTimingFunction} ${getDelay}ms,
        opacity ${getDuration}ms ${getTimingFunction} ${getDelay}ms;
      ` : '')}

  ${(props) =>
    (props.animation ?
      css`
        animation: ${fadeInKeyframes} ${getDuration}ms ${getTimingFunction}
          ${getDelay}ms 1 normal backwards;
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
export const ENTERING = 'entering';
export const ENTERED = 'entered';
export const EXITING = 'exiting';
export const EXITED = 'exited';

export class TransitionWithoutForwardingRef extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: UNMOUNTED,
      initiallyVisible: !props.hidden,
    };
    this.refTransition = this.props.innerRef || React.createRef();
    this.animationOrTransitionEnded = this.animationOrTransitionEnded.bind(this);
  }

  componentDidMount() {
    this.refTransition.current.addEventListener('transitionend', this.animationOrTransitionEnded);
    this.refTransition.current.addEventListener('animationend', this.animationOrTransitionEnded);

    const { initiallyVisible } = this.state;
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ status: initiallyVisible ? ENTERING : EXITED });
  }

  componentDidUpdate(prevProps) {
    let nextStatus = null;
    if (prevProps !== this.props) {
      const { status } = this.state;

      if (this.props.hidden) {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      } else if (status === EXITING || status === EXITED) {
        nextStatus = ENTERING;
      }
    }
    if (nextStatus != null) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ status: nextStatus });
    }
  }

  componentWillUnmount() {
    this.refTransition.current.removeEventListener('transitionend', this.animationOrTransitionEnded);
    this.refTransition.current.removeEventListener('animationend', this.animationOrTransitionEnded);
  }

  animationOrTransitionEnded() {
    if (this.state.status === EXITING) {
      this.setState({ status: EXITED });
    } else if (this.state.status === ENTERING) {
      this.setState({ status: ENTERED });
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
      hideOnExit,
      ...transitionProps
    } = this.props;

    const { status, initiallyVisible } = this.state;

    delete transitionProps.hidden; /* We can't use `hidden` as it just hides element */

    transitionProps.hidden = status === EXITED && hideOnExit;
    transitionProps.visible = (status === ENTERING || status === ENTERED) ? 1 : 0;
    transitionProps.animation = initiallyVisible && !noInitialEnter && !noEnter;
    transitionProps.transition =
      ((status === ENTERING || status === ENTERED) && !noEnter) ||
      ((status === EXITING || status === EXITED) && !noExit)
        ? 1
        : 0;

    return (
      <TransitionComponent ref={this.refTransition} {...transitionProps}>
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
