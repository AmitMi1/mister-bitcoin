import { Component } from "react"
import { connect } from "react-redux"

class _MoveList extends Component {

    get movesToShow() {
        const { contactId } = this.props
        const { moves } = this.props.loggedInUser
        const movesToShow = contactId ? moves.filter(move => move.toId === contactId) : moves.filter((move, idx) => {
            if (idx <= 2)
                return move
        })
        return movesToShow
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            console.log(this.props);
        }
    }

    render() {
        // var { moves } = this.props
        // // var { conta } = this.props
        // console.log(moves);
        // moves = moves.filter((move, idx) => {
        //     if (idx <= 2)
        //         return move
        // })
        const moves = this.movesToShow

        return (
            <section className="move-list">
                {moves.map(move =>
                    <div key={move.at}>{move.at}</div>
                )}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.userModule.loggedInUser
    }
}

export const MoveList = connect(mapStateToProps)(_MoveList)
