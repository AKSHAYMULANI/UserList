import { Box, Button, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const AddUser = () => {

    return (
        <Box w={'80%'} m={'auto'}>
            <Text fontSize={'25px'}>Add Users</Text>
        <FormControl>
            <FormLabel>User Name</FormLabel>
                <Input type={'text'} placeholder={'Enter Full Name'} name={'UserName'} />
            <FormLabel>Address</FormLabel>
                <Textarea type={'address'} placeholder={'Enter Address'} name={'address'} />
        </FormControl>
        <Box m={'10px'}>
        <Button>Add User</Button>
        </Box>
        <Link to={'/'}>Go Back</Link>
        </Box>
    )
}

export default AddUser