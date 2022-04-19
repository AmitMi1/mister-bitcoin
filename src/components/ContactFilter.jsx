import { Component } from 'react'

export class ContactFilter extends Component {

    state = {
        term: '',
        // phone: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter(this.state)
        })
    }

    render() {
        const { term } = this.state
        return (
            <section className="contact-filter">

                <section>
                    <label htmlFor="term">Search</label>
                    <input onChange={this.handleChange} type="text" id="term" name="term" value={term} />
                </section>

            </section>
        )
    }
}
