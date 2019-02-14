import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faMoneyCheck, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { calcTime, convertMoney} from '../../../helpers';
import './MovieInfoBar.css';

const MovieInfoBar = (props) => {
    return (
        <div className="rmdb-movieinfobar">
           <div className="rmdb-movieinfobar-content">
                <div className="rmdb-movieinfobar-content-col">
                        <FontAwesomeIcon icon={faTimes} name="clock-o" size="2x">
                        <span className="rmdb-movieinfobar-info">Running time: {calcTime(props.time)}</span>
                        </FontAwesomeIcon>
                
                </div>
                <div className="rmdb-movieinfobar-content-col">
                <FontAwesomeIcon icon={faMoneyCheck} name="money" size="2x"></FontAwesomeIcon>
                <span className="rmdb-movieinfobar-info">Budget: {convertMoney(props.budget)}</span>
                </div>
                <div className="rmdb-movieinfobar-content-col">
                <FontAwesomeIcon icon={faMoneyBill} name="ticket" size="2x"></FontAwesomeIcon>
                <span className="rmdb-movieinfobar-info">Revenue: {convertMoney(props.revenue)}</span>
                </div>
           </div>
        </div>
    )
}

export default MovieInfoBar;