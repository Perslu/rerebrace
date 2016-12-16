import React from 'react';
import "./styles.css";
import PersluLogo from '../PersluLogo';
import BackButton from '../BackButton';
import LoginButton from '../LoginButton';
import MenuButton from '../MenuButton';
import ContactButton from '../ContactButton';
import LeftControls from './AppHeaderLeftControls';
import RightControls from './AppHeaderRightControls';
import CenterControls from './AppHeaderCenterControls';

const buttonsCenterTop = 12;
const buttonsCenterSide = 10;

const makeBackButton = (props) => <BackButton size={20} onClick={props.onBack}/>;
const makeMenuButton = (props) => <MenuButton size={20} />;

const AppHeader = (props) => (
  <div className="AppHeader">

    <LeftControls mt={buttonsCenterTop} ml={buttonsCenterSide}>
      {(props.hasBack) ? makeBackButton(props) : makeMenuButton(props)}
    </LeftControls>

    <CenterControls mt={5}>
      <PersluLogo/>
    </CenterControls>

    <RightControls mt={buttonsCenterTop} mr={buttonsCenterSide}>
      {(props.hasBack) ? ''  : <LoginButton/> }
      {(props.hasBack) ? ''  : <ContactButton/> }
    </RightControls>

  </div>
);

AppHeader.PropTypes = {
  hasBack: React.PropTypes.bool,
  onBack: React.PropTypes.func,

};

export default AppHeader
