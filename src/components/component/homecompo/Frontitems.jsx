import styled from "styled-components";
import Slider from "react-slick";
const Container = styled.div`
  min-height: 30vh;
  margin:1rem 0;

`;
const HeroTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  margin: 0 1rem;
  text-transform: capitalize;
`;
const Tag = styled.div`
  text-decoration: underline;
  font-size: 1.2rem;
`;
const Showtag = styled.div`
  &:hover {
    color: red;
    cursor: pointer;
  }
`;
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

function Frontitems({frontitem}) {

  return (
    <Container>
      <HeroTag>
        <Tag>{frontitem.tag} </Tag>
        <Showtag>
          show more {">"}
          {">"}
        </Showtag>
      </HeroTag>
      <Slider {...settings}>
        {frontitem.card.map(({itemsold, images , itemcontainers }, index)=>(
        <Card key={index} itemsold={itemsold} images = {images} itemcontainers={itemcontainers} />
        ))}

      </Slider>
    </Container>
  );
}

const Cardcontainer = styled.div`
width:300px;
-webkit-box-shadow: 7px 5px 5px 0px rgba(48,47,44,0.5);
-moz-box-shadow: 7px 5px 5px 0px rgba(48,47,44,0.5);
box-shadow: 7px 5px 5px 0px rgba(48,47,44,0.5);
transition : all 0.3s ;
&:hover {
    cursor:pointer ;
    transform: scale(1.05);
}
`;
const Imagecontainer = styled.div``;
const Image = styled.img`
border-radius: 8px;
padding: 5px;
object-fit:cover;
`;
const Itemcontainer = styled.div`
  display: flex;
  justify-content:space-evenly;
  text-transform: capitalize;
`;
const Itemname = styled.div`
    font-weight:bolder;
`;
const Discounted = styled.div``;
const Price = styled.span`
text-decoration: line-through;
color:red;
`;
const Card = ({itemsold,images,itemcontainers}) => {

  return (
    <Cardcontainer>
      <Imagecontainer>
        <Image
          width="300px"
          height="200px"

          src={images.imgsrc}
          alt={images.alt}
        />
      </Imagecontainer>
      <Itemcontainer>
        <Itemname> {itemcontainers.itemname}</Itemname>
        <Discounted>
          {itemcontainers.discounted} <Price>{itemcontainers.price}</Price>
        </Discounted>
      </Itemcontainer>
      <Price>{itemsold}</Price>
    </Cardcontainer>
  );
};

export default Frontitems;
