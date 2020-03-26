import React from 'react'

import { HorizontalBar, Polar } from 'react-chartjs-2'

const HorizontalBarChart = props => {
    const mexico = props.mexico.replace(',', '')
    const usa = props.usa.replace(',', '')
    const china = props.china.replace(',', '')
    const italy = props.italy.replace(',', '')
    const spain = props.spain.replace(',', '')

    const data = {
        labels: ['México', 'USA', 'China', 'Italia', 'España'],
        datasets: [
            {
                label: 'Casos confirmados',
                backgroundColor: 'rgba(0, 167, 241, 0.2)',
                borderColor: 'rgba(0, 167, 241, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0, 167, 241, 0.4)',
                hoverBorderColor: 'rgba(0, 167, 241, 1)',
                data: [mexico, usa, china, italy, spain]
            }
        ]
    }

    return (
        <HorizontalBar data={data}/> 
    )
}

export const PolarChart = props => {
    const mexico = props.mexico.replace(',', '')
    const usa = props.usa.replace(',', '')
    const china = props.china.replace(',', '')
    const italy = props.italy.replace(',', '')
    const spain = props.spain.replace(',', '')

    const data = {
        labels: ['México', 'USA', 'China', 'Italia', 'España'],
        datasets: [
            {
                label: 'Total de recuperados',
                backgroundColor: 'rgba(0, 167, 241, 0.2)',
                borderColor: 'rgba(0, 167, 241, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0, 167, 241, 0.4)',
                hoverBorderColor: 'rgba(0, 167, 241, 1)',
                data: [mexico, usa, china, italy, spain]
            }
        ]
    }

    return (
        <Polar data={data}/> 
    )
}

export default HorizontalBarChart