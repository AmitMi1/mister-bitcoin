import { Component } from "react"

export class TransferFunds extends Component {
    state = {
        amount: ''
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState({ [field]: value })
    }

    render() {

        const { contact, loggedInUser, onSpendBalance } = this.props

        return (
            <section className="transfer-funds" >
                <h4>Transfer funds to {contact.name}</h4>
                <form onSubmit={ev => onSpendBalance(ev, contact, this.state.amount)}>
                    <label htmlFor="amount">amount</label>
                    <input name="amount" type="number" max={loggedInUser.coins} min={0} value={this.state.amount} onChange={this.handleChange} />
                    <button>Transfer</button>
                </form>
            </section >
        )
    }
}
