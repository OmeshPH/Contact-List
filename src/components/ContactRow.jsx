export default function ContactRow({ contact }) {
  // Render a table row with contact details
  return (
    <tr>
      <td>{contact.name}</td>  {/* Name */}
      <td>{contact.email}</td>  {/* Email */}
      <td>{contact.phone}</td>  {/* Phone */}
    </tr>
  );
}