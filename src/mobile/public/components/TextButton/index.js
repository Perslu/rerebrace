import React from 'react';
import "./styles.css";



const TextButton = (props) => <button className="TextButton" type={props.type} > {props.tekst}</button>;


export default TextButton
