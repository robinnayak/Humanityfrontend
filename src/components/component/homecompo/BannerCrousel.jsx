import { containerSize } from "../../alljsfiles/breakpoint";
// import { bannerimg } from "../../alljsfiles/dataDetail ";
import { bannerimg } from "../../alljsfiles/dataDetail";
import styled from "styled-components";
import Slider from "react-slick";
const Container = styled.div`
margin : ${containerSize.marginvertical} 0;


`
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
  };
// background: url("https://images.pexels.com/photos/6003114/pexels-photo-6003114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");

const BannerImage = styled.div`
    min-height:70vh;
    width:800px;
  background:url(${props => props.img});
  background-position:center;
  background-size:cover;
  background-repeat:no-repeat;
  `
function BannerCrousel() {
    return (
        <Container>
            <Slider {...settings} >
                {bannerimg.map((im,index)=>(
                <BannerImage img={im.images} key={index} alt="" style={{width:"100%"}} />
                
                ))}
            </Slider>

        </Container>
    )
}

export default BannerCrousel
