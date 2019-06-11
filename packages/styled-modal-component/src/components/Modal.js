/* eslint-env browser */

import React from 'react';
import styled, { css } from 'styled-components';

import { theme } from 'styled-config';
import { ModalContent } from './ModalContent';
import { ModalDialog } from './ModalDialog';
import { ModalBackdrop } from './ModalBackdrop';
import { ModalWrapper } from './ModalWrapper';

const Fade = styled.div`
  display: block;
  transition: visibility 0.5s, opacity 0.5s ease-out;

  ${({ hidden }) =>
    hidden && css`
      visibility: hidden;
      opacity: 0;
    `}
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hidden: props.hidden };

    this.elementMouseDown = null;
    this.elementTriggeredOpen = null;

    this.refModal = React.createRef();
    this.refFade = React.createRef();

    this.handleBackdropMouseDown = this.handleBackdropMouseDown.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);

    if (!props.hidden) {
      this.elementTriggeredOpen = document.activeElement;
    }
  }

  componentDidMount() {
    if (!this.state.hidden) {
      this.open();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.hidden !== prevProps.hidden) {
      if (!this.props.hidden) {
        this.elementTriggeredOpen = document.activeElement;
      }

      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ hidden: this.props.hidden });

      return;
    }

    if (this.state.hidden && !prevState.hidden) {
      this.close();
    } else if (!this.state.hidden && prevState.hidden) {
      this.open();
    }
  }

  componentWillUnmount() {
    if (!this.state.hidden) {
      this.close();
    }
  }

  open() {
    this.refModal.current.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  close() {
    setTimeout(() => {
      document.body.style.overflow = '';

      const { returnFocusAfterClose } = this.props;

      if (returnFocusAfterClose && this.elementTriggeredOpen !== null) {
        this.elementTriggeredOpen.focus();
        this.elementTriggeredOpen = null;
      }
    }, 500 /* Fade delay */);
  }

  canToggle() {
    const { backdrop } = this.props;

    if (backdrop === 'static' || backdrop === false) {
      return false;
    }

    const { opacity } = window.getComputedStyle(this.refFade.current);

    return opacity <= 0.1 || opacity >= 0.9;
  }

  handleBackdropClick(e) {
    if (e.target !== this.elementMouseDown) {
      return;
    }

    e.stopPropagation();

    if (this.canToggle() && e.target === this.refModal.current) {
      this.props.toggle();
    }
  }

  handleBackdropMouseDown(e) {
    this.elementMouseDown = e.target;
  }

  render() {
    const {
      FadeComponent,
      ModalWrapperComponent,
      ModalDialogComponent,
      ModalBackdropComponent,
      ModalContentComponent,
      fadeProps,
      wrapperProps,
      dialogProps,
      contentProps,
      backdropProps,
      centered,
      noRadius,
      children,
      backdrop,
      sm,
      lg,
      ...rest
    } = this.props;

    const { hidden } = this.state;

    return (
      <FadeComponent
        hidden={hidden}
        ref={this.refFade}
        {...rest}
        {...fadeProps}
      >
        <ModalWrapperComponent
          theme={this.props.theme}
          ref={this.refModal}
          onMouseDown={this.handleBackdropMouseDown}
          onClick={this.handleBackdropClick}
          {...wrapperProps}
        >
          <ModalDialogComponent
            theme={this.props.theme}
            lg={lg}
            sm={sm}
            centered={centered}
            noRadius={noRadius}
            {...dialogProps}
          >
            <ModalContent theme={this.props.theme} {...contentProps}>
              {children}
            </ModalContent>
          </ModalDialogComponent>
        </ModalWrapperComponent>

        {!!backdrop && <ModalBackdropComponent
          theme={this.props.theme}
          backdrop={backdrop}
          {...backdropProps}
        />}
      </FadeComponent>
    );
  }
}

Modal.defaultProps = {
  theme,
  FadeComponent: Fade,
  ModalWrapperComponent: ModalWrapper,
  ModalDialogComponent: ModalDialog,
  ModalBackdropComponent: ModalBackdrop,
  ModalContentComponent: ModalContent,
  backdrop: true,
  returnFocusAfterClose: true,
  toggle: /* istanbul ignore next */ () => {},
};

export { Modal };
