/* eslint-env browser */

import React from 'react';
import styled, { css } from 'styled-components';

import { Div } from 'styled-base-components';

import {
  theme as DefaultTheme,
  getColor,
  getBorderRadius,
  getPadding,
  getMargin,
  getFontSize,
  getBorder,
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

const isFullWidth = (props) => (
  props.fullWidth
    ? css`
      min-width: 100%;
    `
    : null
);

const borderRadius = (props) => {
  if (props.noRadius) {
    return css`
      border-radius: ${getBorderRadius(props, 'dropdownMenu', 'noRadius')};
    `;
  }

  return css`
    border-radius: ${getBorderRadius(props, 'dropdownMenu', 'default')};
  `;
};

const StyledDiv = styled(Div)`
  position: absolute;
  top: 100%;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  padding: ${(props) => getPadding(props, 'dropdownMenu', 'default')};
  margin: ${(props) => getMargin(props, 'dropdownMenu', 'default')};
  font-size: ${(props) => getFontSize(props, 'dropdownMenu', 'default')};
  color: ${(props) => getColor(props, 'dropdownMenu', 'color')};
  text-align: left;
  list-style: none;
  background-color: ${(props) => getColor(props, 'dropdownMenu', 'backgroundColor')};
  background-clip: padding-box;
  border: ${(props) => getBorder(props, 'dropdownMenu', 'default')} ${(props) => getColor(props, 'dropdownMenu', 'borderColor')};
  ${(props) => borderRadius(props)};
  ${(props) => dropdownMenuHidden(props)};
  ${(props) => isLeftOrRight(props)};
  ${(props) => isFullWidth(props)};
`;

StyledDiv.defaultProps = {
  theme: DefaultTheme,
  hidden: false,
  fullWidth: false,
};

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
    const {
      children, alwaysVisible, hidden, ...rest
    } = this.props;

    return (
      <StyledDiv
        ref={this.container}
        hidden={!alwaysVisible && hidden}
        {...rest}
      >
        {children}
      </StyledDiv>
    );
  }
}

DropdownMenu.defaultProps = {
  hidden: false,
  toggle: /* istanbul ignore next */ () => {},
};

export { DropdownMenu };
