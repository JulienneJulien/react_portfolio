import React from 'react'
import { useParams } from "react-router-dom"
import {PortfolioCards} from "../helpers/PortfolioCardsList"
import { GitHub } from '@mui/icons-material';

// To allow the 'params hook' to connect to our Portfolios route to display defined id.
function PorfolioProjectDisplay() {
    const {id} = useParams();
    const portfolios = PortfolioCards[id]
    return <div className='portfolios'>
        <h2>{portfolios.title}</h2>
        <img src={portfolios.image} />
        <GitHub />
    </div>;
}

export default PorfolioProjectDisplay