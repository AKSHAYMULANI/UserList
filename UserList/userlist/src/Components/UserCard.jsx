import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

//TO SHOW USER LIST CARD COMPONENT

const UserCard = ({ data, HandleDelete }) => {
  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Address</Th>
            <Th>Remove</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((ele) => {
            return (
              <Tr key={ele.id}>
                <Td>{ele.id}</Td>
                <Td>{ele.name}</Td>
                <Td>{ele.address}</Td>
                <Td>
                  <Button onClick={() => HandleDelete(ele.id)}>DELETE</Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};

export default UserCard;
