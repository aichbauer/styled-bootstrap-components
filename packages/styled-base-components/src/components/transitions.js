import React from 'react';
import styled, { css } from 'styled-components';

const getDelay = ({ delay }) => delay || 0;
const getDuration = ({ duration }) => duration || 500;
const getTimingFunction = ({ timingFunc }) => timingFunc || 'ease-out';
const getStatusChangeDelay = (props) => getDelay(props) + getDuration(props);

// TransitionFade is default transition component using
// opacity and visibility.
export const TransitionFade = styled.div`
  ${(props) => (
    props.hidden ? css`
      display: none;
    ` : null)}

  ${(props) =>
    (props.transition ?
      css`
      transition: visibility ${getDuration}ms ${getTimingFunction} ${getDelay}ms,
        opacity ${getDuration}ms ${getTimingFunction} ${getDelay}ms;
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
    this.nextCallback = null;
  }

  componentDidMount() {
    const { initiallyVisible } = this.state;
    const { noInitialEnter } = this.props;

    if (initiallyVisible) {
      if (noInitialEnter) {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({ status: ENTERED });
      } else {
        this.forceUpdate();

        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({ status: ENTERING }, () => {
          this.setNextCallback(
            () => this.setState({ status: ENTERED }),
            getStatusChangeDelay(this.props),
          );
        });
      }
    } else {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ status: EXITED });
    }
  }

  componentDidUpdate(prevProps) {
    const { noEnter, noExit, hideOnExit } = this.props;

    let nextStatus = null;
    let nextStatusCallback = null;
    if (prevProps !== this.props) {
      const { status } = this.state;

      if (this.props.hidden) {
        if (status === ENTERING || status === ENTERED) {
          if (noExit) {
            nextStatus = EXITED;
          } else {
            nextStatus = EXITING;
            nextStatusCallback = () => this.setState({ status: EXITED });
          }
        }
      } else if (status === EXITING || status === EXITED) {
        if (noEnter) {
          nextStatus = ENTERED;
        } else if (hideOnExit) {
          // If we were hidden (display: none), then we should first render
          // component with normal display.

          // This special case renders components without hidden, then renders
          // it with as visible, and after transition it will update status
          // to ENTERED.

          // eslint-disable-next-line react/no-did-update-set-state
          this.setState({ status: UNMOUNTED }, () => {
            this.setNextCallback(() => this.setState({ status: ENTERING }, () => {
              this.setNextCallback(
                () => this.setState({ status: ENTERED }),
                getStatusChangeDelay(this.props),
              );
            }), 0);
          });
          return;
        } else {
          nextStatus = ENTERING;
          nextStatusCallback = () => this.setState({ status: ENTERED });
        }
      }
    }
    if (nextStatus != null) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ status: nextStatus }, () => {
        this.setNextCallback(nextStatusCallback, getStatusChangeDelay(this.props));
      });
    }
  }

  componentWillUnmount() {
    if (this.nextCallback != null) {
      this.nextCallback.cancel();
    }
  }

  setNextCallback(callback, delay) {
    // This method helps to avoid multiple simultaneous callbacks. It clears
    // alreadu set callbacks and schedules new one.

    if (this.nextCallback != null) {
      this.nextCallback.cancel();
    }

    let active = true;

    this.nextCallback = () => {
      if (!active) { return; }

      active = false;
      this.nextCallback = null;

      if (callback != null) {
        callback();
      }
    };

    this.nextCallback.cancel = () => {
      active = false;
    };

    setTimeout(this.nextCallback, delay);

    return this.nextCallback;
  }

  forceUpdate() {
    // Force repaint for transitions to work

    // eslint-disable-next-line no-unused-expressions
    this.refTransition.current && this.refTransition.current.scrollTop;
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

    const { status } = this.state;

    delete transitionProps.hidden; /* We can't use `hidden` as it just hides element */

    transitionProps.hidden = status === EXITED && hideOnExit;
    transitionProps.visible = (status === ENTERING || status === ENTERED) ? 1 : 0;
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
};

export const Transition = React.forwardRef((props, ref) => (
  <TransitionWithoutForwardingRef innerRef={ref} {...props} />
));
