import React from 'react'
import { useParams } from "react-router-dom"
import {PortfolioCards} from "../helpers/PortfolioCardsList"
import { GitHub} from '@mui/icons-material';
import "../styles/PortfolioProjectDisplay.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

// To allow the 'params hook' to connect to our Portfolios route to display defined id.
function PorfolioProjectDisplay() {
    const {id} = useParams();
    const portfolios = PortfolioCards[id]
    return (
    <div className='portfolios'>
        <h2>{portfolios.title}</h2>
        <img src={portfolios.image} alt='porfolios images' />
        <p>
            <b><i>Description:</i></b> {portfolios.description}
        </p>
        <div>
        
        <a href={portfolios.github}><GitHub /></a>
        <a href={portfolios.deployment}><FontAwesomeIcon icon={faGlobe} size="xs" /></a>
        </div>
    </div>
    );
}

export default PorfolioProjectDisplay