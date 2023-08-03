import { FaEnvelope, FaIdBadge, FaPhone } from "react-icons/fa";

const ClientInfo = ({ client }) => {
  return (
    <>
      {client && (
        <>
            <h5 className="mt-5">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="icon" /> {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="icon" /> {client.name}
        </li>
        <li className="list-group-item">
          <FaPhone className="icon" /> {client.name}
        </li>
      </ul>
        </>
      )}
  
    </>
  );
};

export default ClientInfo;
