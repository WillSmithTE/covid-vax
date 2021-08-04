import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { api } from "./api";

export const AgeToVaccinationRateGraph = () => {

    const [rawData, setRawData] = useState(undefined)
    const [manipulatedData, setManipulatedData] = useState(undefined)

    useEffect(() => {
        api.getAll().then(setRawData);
    }, []);

    useEffect(() => {
        if (rawData) {
            const manipulated = manipulate(rawData);
            setManipulatedData(manipulated)
        }
    }, [rawData]);

    return manipulatedData ? <Chart
        width={'800px'}
        height={'500px'}
        chartArea={{ width: "100%", height: "100%" }}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={
            [
                ['x', 'Vaccinated', ...manipulatedData.placeNames],
                ...manipulatedData.data
            ]
        }
        options={{
            title: 'Age vs Vaccination Rate',
            hAxis: { title: 'Median age' },
            vAxis: { title: '% at least 1 dose' },
            // legend: 'none',
            trendlines: {
                0: { type: 'linear', showR2: true, visibleInLegend: true, lineWidth: 3, pointSize: 0, }
            },
            lineWidth: 0,
            pointSize: 5,
            series: {
                0: { pointSize: 0 },
              },          
        }}
        rootProps={{ 'data-testid': '1' }}
    /> : <h1>loading...</h1>
};

function manipulate({ Data }) {
    const onlySydney = Data.filter(({ Area }) => Area.Name4.includes('Sydney'))
    const data = onlySydney
        .map(({ Area, CovidVaccine }, index) => {
            const row = new Array(onlySydney.length + 2).fill(null);
            row[0] = Area.CensusStats.Age.Median;
            row[1] = CovidVaccine.Num1Dose
            row[index + 2] = CovidVaccine.Num1Dose;
            return row;
        });

    return {
        data,
        placeNames: onlySydney.map(({ Area }) => Area.Name4.replace("Sydney - ", ""))
    }
}