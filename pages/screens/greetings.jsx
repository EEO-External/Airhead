import { Box,Text } from '@chakra-ui/react'
export default function Greetings() {
  return(
    <Box w="100vw" h="100vh" display="flex" justifyContent="center" alignItems="center" bgImage="./AAscreen3.jpeg" bgPos="center">
        {/* <h1>Greetings I am Airhead your virtual assistant!</h1>
        <h2>Have we met before?</h2> */}
        <Box w="265px" h="92px" bg="blue.400"><Text>Estimated Wait times for TSA</Text></Box>
    </Box>
  )
}