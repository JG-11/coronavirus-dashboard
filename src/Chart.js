import React, { memo } from 'react'
import './App.css'

import { HorizontalBar, Bar } from 'react-chartjs-2'

const HorizontalBarChart = props => {
    const data = {
        labels: props.labels,
        datasets: [
            {
                label: 'Active cases',
                backgroundColor: 'rgba(0, 167, 241, 0.2)',
                borderColor: 'rgba(0, 167, 241, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0, 167, 241, 0.4)',
                hoverBorderColor: 'rgba(0, 167, 241, 1)',
                data: props.cases
            }
        ]
    }

    return (
        <HorizontalBar data={data} /> 
    )
}

export const VerticalBarChart = memo(
    function BarChart(props) {
        const data = {
            labels: props.labels,
            datasets: [
                {
                    label: 'Total recovered',
                    backgroundColor: 'rgba(0, 167, 241, 0.2)',
                    borderColor: 'rgba(0, 167, 241, 1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(0, 167, 241, 0.4)',
                    hoverBorderColor: 'rgba(0, 167, 241, 1)',
                    data: props.cases
                }
            ]
        }
    
        return (
            <Bar data={data} />
        )
    }
)

export default memo(HorizontalBarChart)