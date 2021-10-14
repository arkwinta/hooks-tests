import axios from 'axios'

const API = axios.create({
    baseURL: "https://disease.sh/v3/covid-19",
})

export function getHistoricalCovidData() {
    API.get('/historical/all', {
        params: {
            lastDays: 'all'
        }
    })
}