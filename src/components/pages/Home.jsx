import Navbar from "../component/homecompo/Navbar";
import styled from "styled-components";
import BannerCrousel from "../component/homecompo/BannerCrousel";
import Categories from "../component/homecompo/Categories";
import Frontitems from "../component/homecompo/Frontitems";
import { frontitems } from "../alljsfiles/dataDetail";
import Vision from "../component/homecompo/Vision";
import Footer from "../../footer/Footer";
const Container = styled.div`

` 

function Home() {
    return (
        <Container>
            <Navbar />
            <BannerCrousel />
            <Categories />
            {frontitems.map((frontitem, index)=>(
            <Frontitems key={index} frontitem={frontitem} />
            ))}
            <Vision />
            <Footer />
        </Container>
    )
}

export default Home
