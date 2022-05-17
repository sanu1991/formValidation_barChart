import React from 'react'
import './Container.scss'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './Home';
import NotFound from './NotFound';
import BarChart from './BarChart';

function Container() {

    return (
        <>
            <Router>

                <Routes>
                    <Route path='/formValidation_barChart' exact element={<Home />} />
                    <Route path="/formValidation_barChart/barchart" element={<BarChart />} />
                    <Route path="/formValidation_barChart/*" element={<NotFound />} />
                </Routes>

            </Router>
        </>
    );
}

export default Container