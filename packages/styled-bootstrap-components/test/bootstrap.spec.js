import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import {
  Alert,
  Badge,
  A,
  Abbr,
  Address,
  Article,
  Aside,
  B,
  Blockquote,
  BaseButton,
  Caption,
  Code,
  Dd,
  Dfn,
  Dialog,
  Dl,
  Dt,
  Fieldset,
  Figcaption,
  Figure,
  Footer,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Header,
  Hgroup,
  Hr,
  Img,
  Input,
  Kbd,
  Legend,
  Label,
  Main,
  Navigation,
  Ol,
  Optgroup,
  Output,
  P,
  Pre,
  Progress,
  Samp,
  Section,
  Select,
  Small,
  Strong,
  Sub,
  Summary,
  Sup,
  Svg,
  Table,
  Textarea,
  Th,
  Ul,
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
  screenSize,
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
  ModalBody,
  ModalContent,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Nav,
  NavLink,
  Navbar,
  NavbarLink,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverHeader,
  Tooltip,
  TooltipArrow,
  TooltipInner,
} from '../src';

test('Simply check if all components are imported and exported correctly', () => {
  const alert = renderer.create(<Alert />).toJSON();
  expect(alert).toMatchSnapshot();

  const a = renderer.create(<A />).toJSON();
  expect(a).toMatchSnapshot();

  const badge = renderer.create(<Badge />).toJSON();
  expect(badge).toMatchSnapshot();

  const abbr = renderer.create(<Abbr />).toJSON();
  expect(abbr).toMatchSnapshot();

  const address = renderer.create(<Address />).toJSON();
  expect(address).toMatchSnapshot();
  const article = renderer.create(<Article />).toJSON();
  expect(article).toMatchSnapshot();

  const aside = renderer.create(<Aside />).toJSON();
  expect(aside).toMatchSnapshot();

  const b = renderer.create(<B />).toJSON();
  expect(b).toMatchSnapshot();
  
  const blockquote = renderer.create(<Blockquote />).toJSON();
  expect(blockquote).toMatchSnapshot();
  
  const baseButton = renderer.create(<BaseButton />).toJSON();
  expect(baseButton).toMatchSnapshot();
  
  const caption = renderer.create(<Caption />).toJSON();
  expect(caption).toMatchSnapshot();
  
  const code = renderer.create(<Code />).toJSON();
  expect(code).toMatchSnapshot();
  
  const dd = renderer.create(<Dd />).toJSON();
  expect(dd).toMatchSnapshot();
  
  const dfn = renderer.create(<Dfn />).toJSON();
  expect(dfn).toMatchSnapshot();
  
  const dialog = renderer.create(<Dialog />).toJSON();
  expect(dialog).toMatchSnapshot();
  
  const dl = renderer.create(<Dl />).toJSON();
  expect(dl).toMatchSnapshot();
  
  const dt = renderer.create(<Dt />).toJSON();
  expect(dt).toMatchSnapshot();
  
  const fieldset = renderer.create(<Fieldset />).toJSON();
  expect(fieldset).toMatchSnapshot();
  
  const figcaption = renderer.create(<Figcaption />).toJSON();
  expect(figcaption).toMatchSnapshot();
  
  const figure = renderer.create(<Figure />).toJSON();
  expect(figure).toMatchSnapshot();
  
  const footer = renderer.create(<Footer />).toJSON();
  expect(footer).toMatchSnapshot();
  
  const h1 = renderer.create(<H1 />).toJSON();
  expect(h1).toMatchSnapshot();
  
  const h2 = renderer.create(<H2 />).toJSON();
  expect(h2).toMatchSnapshot();
  
  const h3 = renderer.create(<H3 />).toJSON();
  expect(h3).toMatchSnapshot();
  
  const h4 = renderer.create(<H4 />).toJSON();
  expect(h4).toMatchSnapshot();
  
  const h5 = renderer.create(<H5 />).toJSON();
  expect(h5).toMatchSnapshot();
  
  const h6 = renderer.create(<H6 />).toJSON();
  expect(h6).toMatchSnapshot();
  
  const header = renderer.create(<Header />).toJSON();
  expect(Header).toMatchSnapshot();
  
  const hgroup = renderer.create(<Hgroup />).toJSON();
  expect(hgroup).toMatchSnapshot();
  
  const hr = renderer.create(<Hr />).toJSON();
  expect(hr).toMatchSnapshot();
  
  const img = renderer.create(<Img />).toJSON();
  expect(img).toMatchSnapshot();
  
  const input = renderer.create(<Input />).toJSON();
  expect(input).toMatchSnapshot();
  
  const kbd = renderer.create(<Kbd />).toJSON();
  expect(kbd).toMatchSnapshot();
  
  const legend = renderer.create(<Legend />).toJSON();
  expect(legend).toMatchSnapshot();
  
  const label = renderer.create(<Label />).toJSON();
  expect(label).toMatchSnapshot();
  
  const main = renderer.create(<Main />).toJSON();
  expect(main).toMatchSnapshot();
  
  const navigation = renderer.create(<Navigation />).toJSON();
  expect(navigation).toMatchSnapshot();
  
  const ol = renderer.create(<Ol />).toJSON();
  expect(ol).toMatchSnapshot();
  
  const optgroup = renderer.create(<Optgroup />).toJSON();
  expect(optgroup).toMatchSnapshot();
  
  const output = renderer.create(<Output />).toJSON();
  expect(output).toMatchSnapshot();
  
  const p = renderer.create(<P />).toJSON();
  expect(p).toMatchSnapshot();
  
  const pre = renderer.create(<Pre />).toJSON();
  expect(pre).toMatchSnapshot();
  
  const progress = renderer.create(<Progress />).toJSON();
  expect(progress).toMatchSnapshot();
  
  const samp = renderer.create(<Samp />).toJSON();
  expect(samp).toMatchSnapshot();
  
  const section = renderer.create(<Section />).toJSON();
  expect(section).toMatchSnapshot();
  
  const select = renderer.create(<Select />).toJSON();
  expect(select).toMatchSnapshot();
  
  const small = renderer.create(<Small />).toJSON();
  expect(small).toMatchSnapshot();
  
  const strong = renderer.create(<Strong />).toJSON();
  expect(strong).toMatchSnapshot();
  
  const sub = renderer.create(<Sub />).toJSON();
  expect(sub).toMatchSnapshot();
  
  const summary = renderer.create(<Summary />).toJSON();
  expect(summary).toMatchSnapshot();
  
  const sup = renderer.create(<Sup />).toJSON();
  expect(sup).toMatchSnapshot();
  
  const svg = renderer.create(<Svg />).toJSON();
  expect(svg).toMatchSnapshot();
  
  const table = renderer.create(<Table />).toJSON();
  expect(table).toMatchSnapshot();
  
  const textarea = renderer.create(<Textarea />).toJSON();
  expect(textarea).toMatchSnapshot();
  
  const th = renderer.create(<Th />).toJSON();
  expect(th).toMatchSnapshot();
  
  const ul = renderer.create(<Ul />).toJSON();
  expect(ul).toMatchSnapshot();
  
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
  
  expect(screenSize.sm).toBe('576px');
  
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
  
  const modal = renderer.create(<Modal />).toJSON();
  expect(modal).toMatchSnapshot();
  
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
  
  const tooltip = renderer.create(<Tooltip />).toJSON();
  expect(tooltip).toMatchSnapshot();
  
  const tooltipArrow = renderer.create(<TooltipArrow />).toJSON();
  expect(tooltipArrow).toMatchSnapshot();
  
  const tooltipInner = renderer.create(<TooltipInner />).toJSON();
  expect(tooltipInner).toMatchSnapshot();
});
