import React from 'react';
import { useState } from 'react';
import '../css/styles.css';

import { ClientAreaHeader } from './client-area-header';
import { LateralBar } from './lateral-bar';

import { Container, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { changePlan } from '../redux/reducer';


export function ClientArea(props){
    const dispatch = useDispatch();

    const [userDataPersonal, setUserDataPersonal] = useState(Object.entries(useSelector(state => state.userData[0])));
    const [userDataAddress, setUserDataAddress] = useState(Object.entries(useSelector(state => state.userData[1])));
    const [userDataPayment, setUserDataPayment] = useState(Object.entries(useSelector(state => state.userData[2])));
    const activePlan = useSelector(state => state.plan);

    return(
        <React.Fragment>
            <section className='client-area'>
                <ClientAreaHeader />
                <div className='main-page'>
                    <LateralBar plan={useSelector(state => state.plan)}/>
                    <div className='info'>
                        {useSelector(state => state.activeBar) === "p1" &&
                        <React.Fragment>
                            <h1>Personal Data</h1>
                            <h2>Account</h2>
                            {userDataPersonal.map(([key, value]) => {
                                return(
                                    <TextField label={key} value={value} disabled sx={{
                                        width: "300px",
                                        marginTop:"30px",
                                    }}/>
                                )
                            })}
                            <h2>Address Data</h2>
                            {userDataAddress.map(([key, value]) => {
                                return(
                                    <TextField label={key} value={value} disabled sx={{
                                        width: "300px",
                                        marginTop:"30px",
                                    }}/>
                                )
                            })}
                            <h2>Payment Data</h2>
                            {userDataPayment.map(([key, value]) => {
                                return(
                                    <TextField label={key} value={value} disabled sx={{
                                        width: "300px",
                                        marginTop:"30px",
                                    }}/>
                                )
                            })}
                        </React.Fragment>
                        }
                        {useSelector(state => state.activeBar) === "p2" && 
                        <section className="plan-switch">
                            <div className={activePlan === "Surprise Genre Book Plan" ? "active plan" : "plan"}>
                                <h2>Surprise Genre Book Plan</h2>
                                {activePlan === "Surprise Genre Book Plan" ? <button className='subscribe-btn ac'>Active</button> : <button className='subscribe-btn' onClick={() => dispatch(changePlan("Surprise Genre Book Plan"))}>Switch</button>}
                            </div>
                            <div className={activePlan === "Surprise Genre Book Plan" ? "plan" : "plan active"}>
                                <h2>Select Your Book Plan</h2>
                                {activePlan === "Select Your Book Plan" ? <button className='subscribe-btn ac'>Active</button> : <button className='subscribe-btn' onClick={() =>{ 
                                    dispatch(changePlan("Select Your Book Plan"))
                                    }}>Switch</button>}
                            </div>

                        </section>
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}