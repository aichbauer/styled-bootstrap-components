import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import {
  Alert,
  Badge,
  BootstrapBaseCss,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImageHeader,
  CardText,
  CardTitle,
  theme,
  getBorder,
  getBorderRadius,
  getBoxShadow,
  getColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getHeight,
  getMargin,
  getPadding,
  getBreakpointSize,
  getConcreteBreakpointSize,
  getWidth,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownDivider,
  FormCheck,
  FormCheckInput,
  FormControl,
  FormControlFile,
  FormControlPlainText,
  FormGroup,
  FormInline,
  FormText,
  InputGroup,
  InputGroupAppend,
  InputGroupPrepend,
  InputGroupText,
  Column,
  Row,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalWrapper,
  ModalBody,
  ModalContent,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalBackdrop,
  Nav,
  NavLink,
  Navbar,
  NavbarLink,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverHeader,
  Table,
  Tr,
  Tooltip,
  TooltipArrow,
  TooltipInner,
} from '../src';

test('Simply check if all components are imported and exported correctly', () => {
  const alert = renderer.create(<Alert />).toJSON();
  expect(alert).toMatchSnapshot();

  const badge = renderer.create(<Badge />).toJSON();
  expect(badge).toMatchSnapshot();

  const css = renderer.create(BootstrapBaseCss.globalStyle.rules).toJSON();
  expect(css).toMatchSnapshot();

  const breadcrumb = renderer.create(<Breadcrumb />).toJSON();
  expect(breadcrumb).toMatchSnapshot();

  const breadcrumbItem = renderer.create(<BreadcrumbItem />).toJSON();
  expect(breadcrumbItem).toMatchSnapshot();

  const button = renderer.create(<Button />).toJSON();
  expect(button).toMatchSnapshot();

  const buttonGroup = renderer.create(<ButtonGroup />).toJSON();
  expect(buttonGroup).toMatchSnapshot();

  const buttonToolbar = renderer.create(<ButtonToolbar />).toJSON();
  expect(buttonToolbar).toMatchSnapshot();

  const card = renderer.create(<Card />).toJSON();
  expect(card).toMatchSnapshot();

  const cardBody = renderer.create(<CardBody />).toJSON();
  expect(cardBody).toMatchSnapshot();

  const cardFooter = renderer.create(<CardFooter />).toJSON();
  expect(cardFooter).toMatchSnapshot();

  const cardHeader = renderer.create(<CardHeader />).toJSON();
  expect(cardHeader).toMatchSnapshot();

  const cardImageHeader = renderer.create(<CardImageHeader />).toJSON();
  expect(cardImageHeader).toMatchSnapshot();

  const cardText = renderer.create(<CardText />).toJSON();
  expect(cardText).toMatchSnapshot();

  const cardTitle = renderer.create(<CardTitle />).toJSON();
  expect(cardTitle).toMatchSnapshot();

  const thisTheme = renderer.create(JSON.stringify(theme)).toJSON();
  expect(thisTheme).toMatchSnapshot();

  expect(typeof getBorder).toBe('function');
  expect(typeof getBorderRadius).toBe('function');
  expect(typeof getBoxShadow).toBe('function');
  expect(typeof getFontFamily).toBe('function');
  expect(typeof getColor).toBe('function');
  expect(typeof getMargin).toBe('function');
  expect(typeof getFontSize).toBe('function');
  expect(typeof getFontWeight).toBe('function');
  expect(typeof getHeight).toBe('function');
  expect(typeof getPadding).toBe('function');
  expect(typeof getBreakpointSize).toBe('function');
  expect(typeof getConcreteBreakpointSize).toBe('function');
  expect(typeof getWidth).toBe('function');

  const container = renderer.create(<Container />).toJSON();
  expect(container).toMatchSnapshot();

  const dropdown = renderer.create(<Dropdown />).toJSON();
  expect(dropdown).toMatchSnapshot();

  const dropdownItem = renderer.create(<DropdownItem />).toJSON();
  expect(dropdownItem).toMatchSnapshot();

  const dropdownMenu = renderer.create(<DropdownMenu />).toJSON();
  expect(dropdownMenu).toMatchSnapshot();

  const dropdownDivider = renderer.create(<DropdownDivider />).toJSON();
  expect(dropdownDivider).toMatchSnapshot();

  const formCheck = renderer.create(<FormCheck />).toJSON();
  expect(formCheck).toMatchSnapshot();

  const formCheckInput = renderer.create(<FormCheckInput />).toJSON();
  expect(formCheckInput).toMatchSnapshot();

  const formControl = renderer.create(<FormControl />).toJSON();
  expect(formControl).toMatchSnapshot();

  const formControlFile = renderer.create(<FormControlFile />).toJSON();
  expect(formControlFile).toMatchSnapshot();

  const formControlPlainText = renderer.create(<FormControlPlainText />).toJSON();
  expect(formControlPlainText).toMatchSnapshot();

  const formGroup = renderer.create(<FormGroup />).toJSON();
  expect(formGroup).toMatchSnapshot();

  const formInline = renderer.create(<FormInline />).toJSON();
  expect(formInline).toMatchSnapshot();

  const formText = renderer.create(<FormText />).toJSON();
  expect(formText).toMatchSnapshot();

  const inputGroup = renderer.create(<InputGroup />).toJSON();
  expect(inputGroup).toMatchSnapshot();

  const inputGroupAppend = renderer.create(<InputGroupAppend />).toJSON();
  expect(inputGroupAppend).toMatchSnapshot();

  const inputGroupPrepend = renderer.create(<InputGroupPrepend />).toJSON();
  expect(inputGroupPrepend).toMatchSnapshot();

  const inputGroupText = renderer.create(<InputGroupText />).toJSON();
  expect(inputGroupText).toMatchSnapshot();

  const column = renderer.create(<Column />).toJSON();
  expect(column).toMatchSnapshot();

  const row = renderer.create(<Row />).toJSON();
  expect(row).toMatchSnapshot();

  const jumbotron = renderer.create(<Jumbotron />).toJSON();
  expect(jumbotron).toMatchSnapshot();

  const listGroup = renderer.create(<ListGroup />).toJSON();
  expect(listGroup).toMatchSnapshot();

  const listGroupItem = renderer.create(<ListGroupItem />).toJSON();
  expect(listGroupItem).toMatchSnapshot();

  const modal = renderer.create(<Modal />, { createNodeMock: () => ({}) }).toJSON();
  expect(modal).toMatchSnapshot();

  const modalWrapper = renderer.create(<ModalWrapper />).toJSON();
  expect(modalWrapper).toMatchSnapshot();

  const modalBody = renderer.create(<ModalBody />).toJSON();
  expect(modalBody).toMatchSnapshot();

  const modalContent = renderer.create(<ModalContent />).toJSON();
  expect(modalContent).toMatchSnapshot();

  const modalDialog = renderer.create(<ModalDialog />).toJSON();
  expect(modalDialog).toMatchSnapshot();

  const modalFooter = renderer.create(<ModalFooter />).toJSON();
  expect(modalFooter).toMatchSnapshot();

  const modalHeader = renderer.create(<ModalHeader />).toJSON();
  expect(modalHeader).toMatchSnapshot();

  const modalTitle = renderer.create(<ModalTitle />).toJSON();
  expect(modalTitle).toMatchSnapshot();

  const modalBackdrop = renderer.create(<ModalBackdrop />).toJSON();
  expect(modalBackdrop).toMatchSnapshot();

  const nav = renderer.create(<Nav />).toJSON();
  expect(nav).toMatchSnapshot();

  const navLink = renderer.create(<NavLink />).toJSON();
  expect(navLink).toMatchSnapshot();

  const navbar = renderer.create(<Navbar />).toJSON();
  expect(navbar).toMatchSnapshot();

  const navbarLink = renderer.create(<NavbarLink />).toJSON();
  expect(navbarLink).toMatchSnapshot();

  const popover = renderer.create(<Popover />).toJSON();
  expect(popover).toMatchSnapshot();

  const popoverArrow = renderer.create(<PopoverArrow />).toJSON();
  expect(popoverArrow).toMatchSnapshot();

  const popoverBody = renderer.create(<PopoverBody />).toJSON();
  expect(popoverBody).toMatchSnapshot();

  const popoverHeader = renderer.create(<PopoverHeader />).toJSON();
  expect(popoverHeader).toMatchSnapshot();

  const table = renderer.create(<Table />).toJSON();
  expect(table).toMatchSnapshot();

  const tr = renderer.create(<Tr />).toJSON();
  expect(tr).toMatchSnapshot();

  const tooltip = renderer.create(<Tooltip />).toJSON();
  expect(tooltip).toMatchSnapshot();

  const tooltipArrow = renderer.create(<TooltipArrow />).toJSON();
  expect(tooltipArrow).toMatchSnapshot();

  const tooltipInner = renderer.create(<TooltipInner />).toJSON();
  expect(tooltipInner).toMatchSnapshot();
});
