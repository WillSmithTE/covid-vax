import { BarGraph } from "./BarGraph";

export const Religion = ({ rawData, }) => {
    return <BarGraph
        xTitle='Religion'
        title='Religion'
        manipulate={manipulate}
        rawData={rawData}
    />
};

function manipulate({ Computed }) {
    const correlations = Computed.ReligionCorrelations;
    const rows = [];
    for (const [key, value] of Object.entries(correlations)) {
        let cleanedReligionName = key.replace("_P", "").replace("Othr_Rel_", "");
        if (cleanedReligionName === 'SB_OSB_NRA_NR') {
            cleanedReligionName = 'None'
        } else if (cleanedReligionName === 'Christianity_Tot') {
            cleanedReligionName = 'Christianity'
        }
        rows.push([cleanedReligionName, value]);
    };

    return rows
        .filter(([religion]) => ['None', 'Christianity', 'Islam', 'Judaism', 'Hinduism', 'Buddhism', 'Sikhism'].includes(religion))
}
