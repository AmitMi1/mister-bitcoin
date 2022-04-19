import { ContactPreview } from "./ContactPreview"

export function ContactList({ contacts, onSelectContact }) {
    if (!contacts) return <div>Loading...</div>
    return (
        <section className="contact-list">
            {contacts.map(contact =>
                <ContactPreview onSelectContact={onSelectContact} contact={contact} key={contact._id}></ContactPreview>
            )}
        </section>
    )
}
