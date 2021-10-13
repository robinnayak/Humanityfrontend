import Navbar from "../component/homecompo/Navbar";
import styled from "styled-components";
import BannerCrousel from "../component/homecompo/BannerCrousel";
import Categories from "../component/homecompo/Categories";

const Container = styled.div`

` 

function Home() {
    return (
        <Container>
            <Navbar />
            <BannerCrousel />
            <Categories />
        </Container>
    )
}

export default Home
