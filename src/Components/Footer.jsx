import React from 'react'
import { IonFooter, IonCardSubtitle } from '@ionic/react'
import propTypes from 'prop-types';

const Footer = ({name, company, url}) => {
   return (
       <IonFooter>
           <IonCardSubtitle>{company}</IonCardSubtitle>
           <p>Dev: </p>
           <IonCardSubtitle>{name}</IonCardSubtitle>
       </IonFooter>
   )
}

Footer.propTypes = {
    name: propTypes.string,
    url: propTypes.string,
    company: propTypes.string
} 

export default Footer