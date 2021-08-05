import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { api } from "./api";
import Statistics from 'statistics.js';
import { Loading } from "./Loading";

export const SalaryToVaccinationRate = () => {

    const [rawData, setRawData] = useState(undefined)
    const [manipulatedData, setManipulatedData] = useState(undefined)
    const [corrCoeff, setCorrCoeff] = useState(undefined)

    useEffect(() => {
        api.getAll().then(setRawData);
    }, []);

    useEffect(() => {
        if (rawData) {
            const manipulated = manipulate(rawData);
            setManipulatedData(manipulated)
        }
    }, [rawData]);

    useEffect(() => {
        if (manipulatedData) {
            const newP = getCorrelationCoefficient(manipulatedData);
            setCorrCoeff(newP)
        }
    }, [manipulatedData]);

    return manipulatedData ?
        <div style={{flexGrow: 1, width: '40%', minWidth: '350px', padding: '10px' }}>
            <Chart
                style={{ margin: '0 auto', }}
                // width={'800px'}
                height={'500px'}
                chartArea={{ width: "100%", height: "100%" }}
                chartType="LineChart"
                loader={<Loading />}
                data={
                    [
                        ['x', 'Vaccinated', ...manipulatedData.placeNames],
                        ...manipulatedData.data
                    ]
                }
                options={{
                    hAxis: { title: 'Median household weekly salary' },
                    vAxis: { title: '% at least 1 dose' },
                    title: `Salary vs Vaccination Rate (r = ${corrCoeff})`,
                    trendlines: {
                        0: { type: 'linear', showR2: false, visibleInLegend: false, lineWidth: 3, pointSize: 0, }
                    },
                    lineWidth: 0,
                    pointSize: 5,
                    series: {
                        0: { pointSize: 0, visibleInLegend: false },
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div> : <Loading />
};

function manipulate({ Data }) {
    const onlySydney = Data.filter(({ Area }) => Area.Name4.includes('Sydney'))
    const data = onlySydney
        .map(({ Area, CovidVaccine }, index) => {
            const row = new Array(onlySydney.length + 2).fill(null);
            row[0] = Area.CensusStats.Income.MedianHousehold;
            row[1] = CovidVaccine.Num1Dose
            row[index + 2] = CovidVaccine.Num1Dose;
            return row;
        });

    return {
        data,
        placeNames: onlySydney.map(({ Area }) => Area.Name4.replace("Sydney - ", ""))
    }
}

function getCorrelationCoefficient(manipulatedData) {
    const vaccDoses = manipulatedData.data.reduce((acc, curr) => [...acc, curr[1]], [])
    const x = manipulatedData.data.reduce((acc, curr) => [...acc, curr[0]], []);
    const combined = vaccDoses.map((vaccinated, index) => ({ x: x[index], vaccinated }))
    const vars = { x: 'metric', vaccinated: 'metric' };
    var stats = new Statistics(combined, vars);
    const r = stats.correlationCoefficient('x', 'vaccinated').correlationCoefficient;
    return r.toFixed(3);
}
