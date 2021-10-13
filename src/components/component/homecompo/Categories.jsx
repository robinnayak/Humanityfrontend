import styled from 'styled-components';
import { containerSize, categorycolor } from "../../alljsfiles/breakpoint";
import Slider from 'react-slick';
import { categories } from "../../alljsfiles/dataDetail";
const Container = styled.div`
    margin:${containerSize.marginvertical} 0};
    min-height:25vh;
    `



const CardItem = styled.div`
position: relative;
margin:1rem;
padding:1rem 1rem;
color:${categorycolor.textcolor};
min-width:200px;
min-height:20vh;
background: ${categorycolor.cardbackside};
    -webkit-box-shadow: 7px 5px 5px 0px rgba(48,47,44,0.5);
    -moz-box-shadow: 7px 5px 5px 0px rgba(48,47,44,0.5);
    box-shadow: 7px 5px 5px 0px rgba(48,47,44,0.5);
    opacity:1;
    display:flex;
    flex-direction:column ;
    opacity:0.8;
    
`
const Herotag = styled.h5`
padding:0.5rem;
margin-right:1rem;
text-align:right;
transition: all 0.3s;
max-width:100px;

&:hover {
    background: ${categorycolor.cardbackside};
    color:${categorycolor.linkcolor};
    cursor:pointer ;
}
`
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay:true,
    autoplaySpeed: 2000,
    responsive:[
        {
            breakpoint:1000,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite:true ,
            }
        },
        {   
            breakpoint:600,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
                infinite:true,
            }
             
        }
    ],    
  };


function Categories() {

    return (
        <>
            <Herotag>
                Show more -{'>'}
            </Herotag>
            <Container>
                <Slider {...settings} > 
                    {categories.map((categorie,index)=>(
                        <Card key={index} itemname = {categorie.itemname} itemsrc = {categorie.itemsrc} flatoff={categorie.flatoff}  />
                    ))}
                </Slider>
            </Container>
        </>
    )
}

const Herotext = styled.h4`
font-family: 'Ubuntu', sans-serif;
text-decoration:underline;
text-align:center;
text-transform: uppercase;
font-size:1.2rem;
letter-spacing:0.1rem;

`

const ImageContianer = styled.div`
position:absolute;
top:40%;
right:10px;


`

const ImageIcon = styled.img.attrs({
    
})`

    width:110px;
    height:110px;
    transform: rotate(45deg);


`;

export const Card = ({itemname, itemsrc , flatoff}) => {
    return (

        <CardItem className="carditem">
            <Herotext>{itemname}</Herotext>
            <ImageContianer className="imagecontainer">
                <ImageIcon src={itemsrc} />
            </ImageContianer>
            <Herotext className="flatoff">flat off {flatoff}</Herotext>
        </CardItem>


    )
}

export default Categories;
