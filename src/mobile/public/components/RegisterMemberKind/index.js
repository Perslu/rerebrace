import React from 'react'
import UILinkButton from 'UI/button/UILinkButton'

const RegisterMemberKind = (props) =>
  <div>
    <UILinkButton to="/Register">Member</UILinkButton>
    <UILinkButton to="/Register">Lady</UILinkButton>
    <UILinkButton to="/Register">Agency</UILinkButton>
  </div>;

export default RegisterMemberKind
