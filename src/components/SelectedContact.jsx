import React, { useState, useEffect } from "react"; // Import React hooks

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  // State to hold the selected contact data (initially null)
  const [contact, setContact] = useState(null);

  // Fetch contact details on selectedContactId change
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedContactId) { // Only fetch if ID exists
          const response = await fetch(
            `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
          );
          const result = await response.json();
          setContact(result);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedContactId]); // Dependency: selectedContactId

  // Function to handle back button click (reset selected ID)
  const handleBack = () => {
    setSelectedContactId(null);
  };

  // Render selected contact details or loading message
  return (
    <div>
      {contact ? ( // Display details if contact exists
        <>
          <h2>{contact.name}</h2>
          <p>Username: {contact.username}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <button onClick={handleBack}>Back to List</button>
        </>
      ) : (
        <p>Loading...</p> // Display loading message otherwise
      )}
    </div>
  );
}