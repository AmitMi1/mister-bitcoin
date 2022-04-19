import { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
// import { createChart } from 'lightweight-charts';
// import { Chart } from 'lightweight-charts';
// import { ChartComponent } from '../components/Chart';


export class StatisticPage extends Component {
    render() {
        const { marketPriceStats, confirmedTransactionsStats, avgBlockSizeStats } = this.props
        // console.log(this.props.match.params);
        // const data = marketPriceStats
        return (
            <section className="statistics">
                <h4>Market price (USD) - 6 months</h4>
                {/* <ChartComponent data={data}></ChartComponent> */}
                <Sparklines data={marketPriceStats}>
                    <SparklinesLine color="orange" />
                    <SparklinesReferenceLine />
                </Sparklines>
                <p>The average USD market price across major bitcoin exchanges.</p>
                <h4>Confirmed transactions - 6 months</h4>
                <Sparklines
                    data={confirmedTransactionsStats}>
                    <SparklinesLine color="green" />
                    <SparklinesReferenceLine />
                </Sparklines>
                <p>The total number of confirmed transactions per day.</p>
                <h4>Average Block Size - 6 months</h4>
                <Sparklines
                    data={avgBlockSizeStats}>
                    <SparklinesLine color="blue" />
                    <SparklinesReferenceLine />
                </Sparklines>
                <p>The average block size over the past 24 hours in megabytes.</p>
            </section>
        )
    }
}

export default StatisticPage