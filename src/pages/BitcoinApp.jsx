import { Component } from 'react'
import { HomePage } from './HomePage'
import { ContactPage } from './ContactPage'
import { ContactDetails } from './ContactDetails'
import { StatisticPage } from './StatisticPage'
import { bitcoinService } from '../services/bitcoinService'
import { NavBar } from '../components/NavBar'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ContactEdit } from './ContactEdit'
import { loadUser } from '../store/actions/userActions'
import { connect } from 'react-redux'
import { Signup } from './Signup'
import { userService } from '../services/userService'

class _BitcoinApp extends Component {

    state = {
        marketPriceStats: null,
        confirmedTransactionsStats: null,
        avgBlockSizeStats: null,
    }

    async componentDidMount() {
        this.loadStats()
        await this.props.loadUser()
    }

    async loadStats() {
        var marketPriceStats = await bitcoinService.getMarketPrice()
        var confirmedTransactionsStats = await bitcoinService.getConfirmedTransactions()
        var avgBlockSizeStats = await bitcoinService.getAvgBlockSize()
        marketPriceStats = marketPriceStats.map(m => m.y)
        confirmedTransactionsStats = confirmedTransactionsStats.map(c => c.y)
        avgBlockSizeStats = avgBlockSizeStats.map(a => a.y)
        this.setState({ marketPriceStats, confirmedTransactionsStats, avgBlockSizeStats })
    }

    PrivateRoute = (props) => {
        const loggedInUser = userService.getUser()
        // console.log(loggedInUser);
        return loggedInUser ? <Route {...props} /> : <Redirect to='/signup' />
    }
    render() {
        const PrivateRoute = this.PrivateRoute
        const { marketPriceStats, confirmedTransactionsStats, avgBlockSizeStats } = this.state
        return (
            <Router>
                <section className="bitcoin-app">
                    <main className="container">
                        <Switch>
                            <Route path='/Statistics'>
                                <StatisticPage
                                    marketPriceStats={marketPriceStats}
                                    confirmedTransactionsStats={confirmedTransactionsStats}
                                    avgBlockSizeStats={avgBlockSizeStats} />
                            </Route>
                            <PrivateRoute path='/contact/edit/:id?' component={ContactEdit} />
                            <PrivateRoute path='/contact/:id' component={ContactDetails} />
                            <Route path='/signup' component={Signup}></Route>
                            <PrivateRoute path='/contact' component={ContactPage} />
                            <PrivateRoute exact={true} path='/' component={HomePage} />
                        </Switch>
                    </main>
                    <NavBar
                        marketPriceStats={marketPriceStats}
                        confirmedTransactionsStats={confirmedTransactionsStats}
                        avgBlockSizeStats={avgBlockSizeStats}
                        onShowContacts={this.onShowContacts}
                        onShowStats={this.onShowStats}
                        onShowHome={this.onShowHome} />

                </section>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.userModule.loggedInUser
    }
}

const mapDispatchToProps = {
    loadUser
}

export const BitcoinApp = connect(mapStateToProps, mapDispatchToProps)(_BitcoinApp)