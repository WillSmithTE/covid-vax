import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { Loading } from "./Loading";

export const Religion = ({ rawData, }) => {

    const [manipulatedData, setManipulatedData] = useState(undefined)

    useEffect(() => {
        if (rawData) {
            const manipulated = manipulate(rawData);
            setManipulatedData(manipulated)
        }
    }, [rawData]);

    return manipulatedData ?
        <div style={{ flexGrow: 1, width: '40%', minWidth: '350px', padding: '10px' }}>
            <Chart
                style={{ margin: '0 auto', }}
                height={'500px'}
                chartArea={{ width: "100%", height: "100%" }}
                chartType="ColumnChart"
                loader={<Loading />}
                data={
                    [
                        ['Religion', 'Correlation'],
                        ...manipulatedData,
                    ]
                }
                options={{
                    legend: 'none',
                    hAxis: { title: 'Religion' },
                    vAxis: { title: 'Correlation Coefficient (r)' },
                    title: `Correlation Between Religion and Vaccination Rate`,
                    chartArea: { width: '50%', height: '50%' },

                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div> : <Loading />
};

function manipulate({ Computed }, getY) {
    const correlations = Computed.ReligionCorrelations;
    const rows = [];
    for (const [key, value] of Object.entries(correlations)) {
        let cleanedReligionName = key.replace("_P", "");
        if (cleanedReligionName === 'SB_OSB_NRA_NR') {
            cleanedReligionName = 'None'
        } else if (cleanedReligionName === 'Christianity_Tot') {
            cleanedReligionName = 'Christianity' // FIX NOT WORKING
        }
        rows.push([cleanedReligionName, value]);
    };

    rows.sort((a, b) => a[1] > b[1] ? 1 : -1);

    return rows
        .filter(([religion]) => ['None', 'Christianity', 'Islam', 'Judaism', 'Hinduism', 'Buddhism'].includes(religion))
}
