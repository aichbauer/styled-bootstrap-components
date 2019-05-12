/* eslint-env browser */

import React from 'react';
import styled, { css } from 'styled-components';

import {
  theme as DefaultTheme,
  colors,
  borderRadius as br,
  padding,
  margin,
  fontSize,
  border,
} from 'styled-config';

const isLeftOrRight = (props) => (
  props.right
    ? css`
      right: 0;
    `
    : css`
      left: 0;
    `
);

const dropdownMenuHidden = (props) => (
  props.hidden
    ? css`
      display: none;
    `
    : css`
      display: block;
    `
);

const isFilling = (props) => (
  props.fill
    ? css`
      min-width: 100%;
    `
    : null
);

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`
      border-radius: ${br(props, 'dropdownMenu').noRadius};
    `;
  }

  return css`
    border-radius: ${br(props, 'dropdownMenu').default};
  `;
};

const StyledDiv = styled.div`
  position: absolute;
  top: 100%;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  padding: ${(props) => padding(props, 'dropdownMenu').default};
  margin: ${(props) => margin(props, 'dropdownMenu').default};
  font-size: ${(props) => fontSize(props, 'dropdownMenu').default};
  color: ${(props) => colors(props, 'dropdownMenu').color};
  text-align: left;
  list-style: none;
  background-color: ${(props) => colors(props, 'dropdownMenu').backgroundColor};
  background-clip: padding-box;
  border: ${(props) => border(props, 'dropdownMenu').default} ${(props) => colors(props, 'dropdownMenu').borderColor};
  ${(props) => borderRadius(props)};
  ${(props) => dropdownMenuHidden(props)};
  ${(props) => isLeftOrRight(props)};
  ${(props) => isFilling(props)};
`;

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleDocumentClick = this.handleDocumentClick.bind(this);

    this.container = React.createRef();
  }

  componentDidMount() {
    this.addEvents();
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  addEvents() {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  removeEvents() {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  handleDocumentClick(e) {
    const container = this.container.current;

    if (this.props.hidden || container === null) {
      return;
    }

    const containerParent = container.parentNode;

    if (
      (containerParent === e.target || !containerParent.contains(e.target))
      && container !== e.target
      && !container.contains(e.target)
    ) {
      this.props.toggle();
    }
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <StyledDiv ref={this.container} {...rest}>
        {children}
      </StyledDiv>
    );
  }
}

DropdownMenu.defaultProps = {
  theme: DefaultTheme,
  hidden: false,
  fill: false,
  toggle: /* istanbul ignore next */ () => {},
};

export { DropdownMenu };
