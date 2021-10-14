import styled from 'styled-components'; 

const Container = styled.div`
    min-height:30vh;
    background-color: #5050ee;
    clip-path: ellipse(201% 100% at -5.87% 100%);
`
function Footer() {
    return (
        <Container>
            hi i am footer 
        </Container>
    )
}

export default Footer
