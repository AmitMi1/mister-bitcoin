import { Component } from 'react'
import { bitcoinService } from '../services/bitcoinService'
import { Lottie } from '../components/Lottie'
import { connect } from 'react-redux'
import { loadUser } from '../store/actions/userActions'
import { MoveList } from '../components/MoveList'


class _HomePage extends Component {

    state = {
        rate: null,
        user: this.props.loggedInUser,
        link: null
    }

    async componentDidMount() {
        await this.props.loadUser()
        this.setState({ link: require('../assets/animate/animate-bitcoin.json') })
    }
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            if (this.props.loggedInUser.name) this.loadRate()
        }
    }

    async loadRate() {
        const { coins } = this.props.loggedInUser
        const rate = await bitcoinService.getRate(coins)
        this.setState({ rate })
    }

    async componentWillUnmount() {
        await this.props.loadUser()
    }

    render() {
        const { rate, link } = this.state
        if (!this.props.loggedInUser || !rate) return <div>Loading...</div>
        const { name, imgUrl, coins, moves } = this.props.loggedInUser

        return (
            <section className="home flex align-center column">
                <section className='flex align-center user-section'>

                    <img src={imgUrl} alt="" className='user-img' />
                    <div className="user flex column">
                        <h3>Hello {name}!</h3>
                        <div>
                            <p>Coins: {coins.toLocaleString()}</p>
                            {rate && <p>BTC: {rate.toLocaleString()}</p>}
                        </div>
                    </div>
                    <MoveList></MoveList>
                </section>
                {
                    (link && <Lottie className="home-intro" animate={link} />)
                }
            </section>
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

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)
// export default HomePage