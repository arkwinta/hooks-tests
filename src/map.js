import { useState, useEffect } from 'react'
import { getHistoricalCovidData } from './API'
import axios from 'axios';

export function Map(props) {
    console.log(props)

    return (
        <div>
            <div>
                Total Number of Covid Cases today: {props.covidData.cases['10/12/21']}
            </div>
            <div>
                Total Number of Covid deaths today: {props.covidData.deaths['10/12/21']}
            </div>
        </div>
    )
}