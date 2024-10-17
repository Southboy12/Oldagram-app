import React, { useState } from 'react'
import Courbet from "./components/Courbet"
import Header from "./components/Head"
import data from "./data"


export default function App() {    
    return (
        <div className='container'>
            <Header />
            <Courbet />
        </div>
    )
}