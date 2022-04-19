import { Link } from "react-router-dom";

export function ContactPreview({ contact }) {
    return (
        <section className="contact-preview flex ">
            <Link className="flex align-center" to={`/contact/${contact._id}`}>
                <img className="contact-img" src={`https://robohash.org/${contact._id}?set=set5`} alt="" />
                <h4>{contact.name}</h4>
            </Link>
        </section>
    )
}
