import { faContactBook, faHouseChimney, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

export function NavBar({ onShowStats, onShowContacts, onShowHome }) {
    return (
        <section className="navbar">
            <nav className="flex">
                <NavLink exact className='link-home' to='/'><FontAwesomeIcon icon={faHouseChimney}></FontAwesomeIcon></NavLink>
                <NavLink className='link-contact' to='/contact'><FontAwesomeIcon icon={faContactBook}></FontAwesomeIcon></NavLink>
                <NavLink className='link-stats' to='/Statistics'><FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon></NavLink>
            </nav>
        </section>
    )
}
