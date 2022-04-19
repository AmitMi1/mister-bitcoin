import { Component } from 'react'
import { contactService } from '../services/contactService'

export class ContactEdit extends Component {

    state = {
        contact: null
    }

    async componentDidMount() {
        const id = this.props.match.params.id
        const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
        this.setState({ contact }, () => {
            // this.inputRef.current.focus()
        })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    onSaveContact = async (ev) => {
        ev.preventDefault()
        await contactService.saveContact({ ...this.state.contact })
        this.props.history.push('/')
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <section className="contact-edit">
                <h2>{contact._id ? 'Edit' : 'Add'} Contact</h2>
                <form onSubmit={this.onSaveContact} className='flex column' >
                    <label htmlFor="name">Name</label>
                    <input required ref={this.inputRef} onChange={this.handleChange} value={contact.name} type="text" name="name" id="name" />
                    <label htmlFor="name">Phone</label>
                    <input required onChange={this.handleChange} value={contact.phone} type="tel" name="phone" id="phone" />
                    <label htmlFor="email">Email</label>
                    <input required onChange={this.handleChange} value={contact.email} type="email" name="email" id="email" />

                    <button>Save</button>
                </form>
            </section>
        )
    }
}

export default ContactEdit