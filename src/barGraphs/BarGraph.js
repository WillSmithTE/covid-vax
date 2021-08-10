import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { Loading } from "../Loading";

export const BarGraph = ({ rawData, manipulate, title, xTitle}) => {

    const [manipulatedData, setManipulatedData] = useState(undefined)

    useEffect(() => {
        if (rawData) {
            const manipulated = manipulate(rawData);
            setManipulatedData(manipulated)
        }
    }, [rawData, manipulate]);

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
                        ['X', 'Correlation'],
                        ...manipulatedData,
                    ]
                }
                options={{
                    legend: 'none',
                    hAxis: { title: xTitle },
                    vAxis: { title: 'Correlation Coefficient (r)' },
                    title: `Correlation Between ${title} and Vaccination Rate`,
                    chartArea: { width: '75%', height: '75%' },

                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div> : <Loading />
};
