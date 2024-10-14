
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9fafb;
`;

const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 18px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

const Thead = styled.thead`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
`;

const Th = styled.th`
  padding: 12px 15px;
  font-weight: 500;
  border-bottom: 2px solid #dddddd;
`;

const Tr = styled.tr`
  &:nth-of-type(even) {
    background-color: ${props => props.isSelected ? '#ADD8E6' : '#f3f3f3'};
  }
  &:nth-of-type(odd) {
    background-color: ${props => props.isSelected ? '#ADD8E6' : 'transparent'};
  }
  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;

const Td = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #dddddd;
`;

function App() {
  const [clients, setClients] = useState([]);
  const [selectedId, setSelectedId] = useState(null); // State for tracking selected row

  useEffect(() => {
    axios.get('http://localhost:5000/getClients')
      .then(response => {
        console.log("Data fetched:", response.data);
        setClients(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleRowClick = (id) => {
    setSelectedId(id); // Toggle selection
  };

  return (
    <div>
      <Container>
        <h1>Client Details</h1>
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Phone No</Th>
              <Th>SSN</Th>
              <Th>Address Line 1</Th>
              <Th>Address Line 2</Th>
              <Th>City</Th>
              <Th>Zip Code</Th>
              <Th>State</Th>
            </Tr>
          </Thead>
          <tbody>
            {clients.map(client => (
              <Tr key={client.id} isSelected={selectedId === client.id} onClick={() => handleRowClick(client.id)}>
                <Td>{client.id}</Td>
                <Td>{client.firstName}</Td>
                <Td>{client.lastName}</Td>
                <Td>{client.phone}</Td>
                <Td>{client.ssn}</Td>
                <Td>{client.addressLine1}</Td>
                <Td>{client.addressLine2}</Td>
                <Td>{client.city}</Td>
                <Td>{client.zipCode}</Td>
                <Td>{client.stateName}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;

