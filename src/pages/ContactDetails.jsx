import { faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../services/contactService'
import { removeContact } from '../store/actions/contactActions'
import { connect } from 'react-redux'
import { TransferFunds } from '../components/TransferFunds'
import { spendBalance } from '../store/actions/userActions'
import { MoveList } from '../components/MoveList'

class _ContactDetails extends Component {

    state = {
        contact: null,
    }

    componentDidMount() {
        this.loadContact()
    }

    onRemoveContact = async (contactId) => {
        this.props.removeContact(contactId)
        this.props.history.push('/contact')

    }

    onSpendBalance = async (ev, contact, amount) => {
        ev.preventDefault()
        await this.props.spendBalance(contact, amount)
        console.log(this.props.loggedInUser);
    }

    async loadContact() {
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }
    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <section className='contact-details flex column space-between'>
                <div>
                    <img className="contact-img" src={`https://robohash.org/${contact._id}?set=set5`} alt="" />
                    <p>Name: {contact.name}</p>
                    <p>Phone: {contact.phone}</p>
                    <p>Email: {contact.email}</p>
                </div>
                <MoveList contactId={contact._id}></MoveList>
                <TransferFunds onSpendBalance={this.onSpendBalance} contact={contact} loggedInUser={this.props.loggedInUser}></TransferFunds>
                <section className='actions flex space-between'>
                    <Link to={`/contact/edit/${contact._id}`}><div><FontAwesomeIcon icon={faUserEdit}></FontAwesomeIcon></div></Link>
                    <button onClick={() => this.onRemoveContact(contact._id)} className='btn-remove'><div><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></div></button>
                </section>
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
    removeContact,
    spendBalance
}

export const ContactDetails = connect(mapStateToProps, mapDispatchToProps)(_ContactDetails)