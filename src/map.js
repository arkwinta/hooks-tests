import { useState, useEffect } from 'react'
import { getHistoricalCovidData } from './API'

export function Map() {
    const [covidData, setCovidData] = useState({})

    async function getData() {
        try {
            const covid = await getHistoricalCovidData();
            console.log(covid)
            setCovidData(covid)
            console.log(covidData)
        } catch (e) {
            console.log(e)
        }
        console.log(covidData)
    }


    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            {/* <div>
                Total Number of Covid Cases today: {covidData.cases['10/12/21']}
            </div>
            <div>
                Total Number of Covid deaths today: {covidData.deaths['10/12/21']}
            </div> */}
        </div>
    )
}