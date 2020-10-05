import React, { useState, useEffect } from 'react';

import AccountForm from './components/accountForm';
import './style.css';
// import { db } from '../../services/firebase';


export default function Empresa() {

    // const addOrEditLink = async (linkObject) => {
    //     await db.collection('account').doc().set(linkObject);
    //     console.log('Cuenta guardada :)');
    // }

    // const getAccounts = async () => {
    //     const querySnapShot = await db.collection('account').get();
    //     querySnapShot.forEach(doc => {
    //         console.log(doc.data())
    //     })
    // }

    // useEffect(() => {
    //     getAccounts();
    // })

    return (
        <div className="row" id="row">
            <AccountForm
            //  addOrEditLink={addOrEditLink}
              />
            <div className="col-4 ">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Italo Golin</h5>
                        <p className="card-text">15:03:06 - 24/10/2020</p>
                    </div>

                </div>
            </div>
        </div>
    )
}