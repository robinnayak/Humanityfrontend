import styled from 'styled-components'; 


const Container = styled.div`
    min-height : 20vh;  
    width:100%;
    background:center / cover no-repeat url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80");
    background-attachment: fixed;
    display:flex;
    justify-content:center ;
    align-items:center ;
`
const Herotag = styled.div`
    color:white;
    font-size:1.5rem;
    font-weight:bolder ;
    text-transform : capitalize;
`
function Vision() {
    return (
        <Container>
            <Herotag>
            we build bussiness with trust
            </Herotag>
        </Container>
    )
}

export default Vision
