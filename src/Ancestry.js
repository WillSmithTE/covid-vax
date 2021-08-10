import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { Loading } from "./Loading";

export const Ancestry = ({ rawData, }) => {

    const [manipulatedData, setManipulatedData] = useState(undefined)

    console.error({rawData})
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
                        ['Ancestry', 'Correlation'],
                        ...manipulatedData,
                    ]
                }
                options={{
                    legend: 'none',
                    hAxis: { title: 'Ancestry' },
                    vAxis: { title: 'Correlation Coefficient (r)' },
                    title: `Correlation Between Ancestry and Vaccination Rate`,
                    chartArea: { width: '50%', height: '50%' },

                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div> : <Loading />
};

function manipulate({ Computed }) {
    const correlations = Computed.AncestryCorrelations;
    const rows = [];
    for (const [key, value] of Object.entries(correlations)) {
        let cleanedReligionName = key.replace("_Tot_Resp", "");
        rows.push([cleanedReligionName, value]);
    };

    rows.sort((a, b) => a[1] > b[1] ? 1 : -1);

    return rows
        // .filter(([religion]) => ['None', 'Christianity', 'Islam', 'Judaism', 'Hinduism', 'Buddhism'].includes(religion))
}
