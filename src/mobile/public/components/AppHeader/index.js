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
import {Link} from 'react-router';

const buttonsCenterTop = 12;
const buttonsCenterSide = 10;

const makeBackButton = (props) => <BackButton size={20} onClick={props.onBack}/>;
const makeMenuButton = (props) => <MenuButton size={20} />;

const AppHeader = (props) => (
  <div className="AppHeader">

    <LeftControls>
      {(props.hasBack) ? makeBackButton(props) : makeMenuButton(props)}
    </LeftControls>

    <CenterControls mt={5}>
      <Link to="/" ><PersluLogo/></Link>
    </CenterControls>

    <RightControls mt={buttonsCenterTop} mr={buttonsCenterSide}>
      {(props.hasBack) ? ''  : <LoginButton/> }
      {(props.hasBack) ? ''  : <ContactButton/> }
    </RightControls>

  </div>
);

AppHeader.propTypes = {
  hasBack: React.PropTypes.bool,
  onBack: React.PropTypes.func,

};

export default AppHeader
