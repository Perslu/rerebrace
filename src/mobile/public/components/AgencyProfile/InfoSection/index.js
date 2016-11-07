/**
 * Created by Lena on 04.11.2016.
 */
import React from 'react';
import SectionLight from '../../SectionLight';
import SectionHeader from '../../SectionHeader';
import SectionContent from '../../SectionContent';
import FaLink from 'react-icons/fa/external-link';
import FaAddress from 'react-icons/fa/map-marker';
import FaComunicators from 'react-icons/fa/comment';
import FaWhatsApp from 'react-icons/fa/whatsapp';
import FaPhone from 'react-icons/fa/phone';
import "./styles.css";

function makeWebsite(props) {
  return !props.profile.website ? null : (
    <div className="contentRow">
      <div className="labelColumn">
        <FaLink color="#eee" size={20}/><span> Website</span>
      </div>
      <div className="valueColumn">{props.profile.website}</div>
    </div>
  )
}

function makeAddress(props) {
  return (
    <div className="contentRow">
      <div className="labelColumn">
        <FaAddress color="#eee" size={20}/><span> Address</span>
      </div>
      <div className="valueColumn">{props.profile.country}, {props.profile.city}{props.profile.zipcode ? " "+props.profile.zipcode : null}</div>
      <div className="valueColumn">{props.profile.address ? props.profile.address : null}</div>
    </div>
  )
}

function makeLine(props) {
  return !props.profile.line ? null : (
    <div className="contentRow">
      <div className="labelColumn">
        <FaComunicators color="#eee" size={20}/><span> Line</span>
      </div>
      <div className="valueColumn">{props.profile.line}</div>
    </div>
  )
}

function makeWhatsApp(props) {
  return !props.profile.whatsapp ? null : (
    <div className="contentRow">
      <div className="labelColumn">
        <FaWhatsApp color="#eee" size={20}/><span> WhatsApp</span>
      </div>
      <div className="valueColumn">{props.profile.whatsapp}</div>
    </div>
  )
}

function makeViber(props) {
  return !props.profile.viber ? null : (
    <div className="contentRow">
      <div className="labelColumn">
        <FaComunicators color="#eee" size={20}/><span> Viber</span>
      </div>
      <div className="valueColumn">{props.profile.viber}</div>
    </div>
  )
}

function makePhone(props) {
  return !props.profile.phone ? null : (
    <div className="contentRow">
      <div className="labelColumn">
        <FaPhone color="#eee" size={20}/><span> Phone</span>
      </div>
      <div className="valueColumn">{props.profile.phone}</div>
    </div>
  )
}

const InfoSection = props => (
  <SectionLight pt={30} pb={40}>
    <SectionHeader text="Info"/>
    <SectionContent>
      {makeAddress(props)}
      {makeWebsite(props)}
      {makeLine(props)}
      {makeWhatsApp(props)}
      {makeViber(props)}
      {makePhone(props)}
    </SectionContent>
  </SectionLight>
);


export default InfoSection

