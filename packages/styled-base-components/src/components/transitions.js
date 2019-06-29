import React from 'react';
import styled, { css } from 'styled-components';

const getDelay = ({ delay }) => delay || 0;
const getDuration = ({ duration }) => duration || 500;
const getTimingFunction = ({ timingFunc }) => timingFunc || 'ease-out';

// TransitionFade is default transition component using opacity and
// visibility.
export const TransitionFade = styled.div`
  transition: visibility ${getDuration}ms ${getDelay}ms,
    opacity ${getDuration}ms ${getTimingFunction} ${getDelay}ms;

  ${(props) =>
    props.animated &&
    css`
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      animation: fadeIn ${getDuration}ms ${getTimingFunction} none ${getDelay}ms;
    `}

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

// TODO: Add callbacks for status changes
// TODO: Add props for disabling enter/exit transitions
// TODO: Add prop for disabling initial animation
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
    const { TransitionComponent, children, ...transitionProps } = this.props;

    const { status, initiallyVisible } = this.state;

    transitionProps.animated = initiallyVisible;
    transitionProps.visible = status === ENTERED || status === ENTERING ? 1 : 0;

    return (
      <TransitionComponent {...transitionProps}>{children}</TransitionComponent>
    );
  }
}

Transition.defaultProps = {
  // You can use other components with custom `transition` and `animation`
  // properties. Component should have animation only if it was passed true
  // animated prop and should be visible only if it was passed true
  // visible prop.
  TransitionComponent: TransitionFade,
  // You can use `transitionComponentProps` to pass props to transition
  // component in order to customize it.
  transitionComponentProps: {},
};
