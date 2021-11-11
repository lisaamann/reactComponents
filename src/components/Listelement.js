import React, { Component } from "react";
import styles from './Listelement.module.css';


export default class Listelement extends Component{
render(){
    return <div className={styles.heading} >
        <a>Text</a>
    </div>
}
}