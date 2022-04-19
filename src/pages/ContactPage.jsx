import { Component } from 'react'
import { ContactList } from '../components/ContactList';
import { ContactFilter } from '../components/ContactFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { loadContacts, setFilterBy } from '../store/actions/contactActions'
import { connect } from 'react-redux';


class _ContactPage extends Component {

    // state = {
    //     contacts: null,
    //     filterBy: null
    // }

    async componentDidMount() {
        await this.props.loadContacts()
        // console.log(this.props);
    }

    // async loadContacts() {
    //     const contacts = await contactService.getContacts(this.state.filterBy)
    //     this.setState({ contacts })
    // }

    onChangeFilter = async (filterBy) => {
        // this.setState({ filterBy }, this.loadContacts)
        await this.props.setFilterBy(filterBy)
        this.props.loadContacts()
    }

    render() {
        const { contacts } = this.props
        const { onSelectContact } = this.props
        return (
            <section className="contact-page">
                <ContactFilter onChangeFilter={this.onChangeFilter}></ContactFilter>
                <ContactList onSelectContact={onSelectContact} contacts={contacts}></ContactList>
                <Link className='btn-link' to='/contact/edit'>
                    <div className=''><FontAwesomeIcon icon={faUser}></FontAwesomeIcon><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></div>
                </Link>
            </section>
        )
    }
}


const mapStateToProps = state => {
    return {
        contacts: state.contactModule.contacts
    }
}

const mapDispatchToProps = {
    loadContacts,
    setFilterBy,
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)