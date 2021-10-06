import type { NextPage } from "next";
import { Box } from '@mui/material'

import Navbar from '../components/navbar';


const Home: NextPage = () => {
    return(
        <Box>
            <Navbar/>
            Home
        </Box>
    )
}

export default Home; 