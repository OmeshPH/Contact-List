import React, { useState, useEffect } from "react"; // Import React hooks
import ContactRow from "./ContactRow"; // Import ContactRow component

export default function ContactList({ setSelectedContactId }) {
  // State to hold fetched contacts (initially empty)
  const [contacts, setContacts] = useState([]);

  // Fetches contact data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/");
        const data = await response.json();
        setContacts(data); // Update state with fetched contacts
      } catch (error) {
        console.error(error); // Log errors
      }
    };

    fetchData();
  }, []);

  // Render the contact list using ContactRow component
  return (
    <table className="contact-list">
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr> {/* Static table headers */}
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            onClick={() => setSelectedContactId(contact.id)}
          />
        ))}
      </tbody>
    </table>
  );
}