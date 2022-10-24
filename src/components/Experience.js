import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const Name = styled.h1`
font-size: 120px;
color: white;
margin: 0;
font-weight: 300;
margin-bottom: 50px;
`

const JobContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    transition: .2s all;
    margin-bottom: 50px;

    &:hover {
        transform: scale(1.1);
    }

`

const JobTitle = styled.p`
    font-size: 20px;
`

const Company = styled.span`
    font-weight: 600;
    font-size: 22px;
`

const Dates = styled.span`
    font-size: 18px;
`

const List = styled.ul`
    width: 100%;
    margin: 0;
`

const Item = styled.li`
    font-size: 18px;
    margin: 10px 0;
`

const Experience = () => {


    const details = [
        {
            company: "Apple Inc.",
            position: "Tier 1 Technical Support, Athens",
            dates: "(Jul 2019 - Aug 2020)",
            items: [
                "Highly orgasdadgdsagnized and diligent professional drawing upon ten yea",
                "Highly orgasdadgdsagnized and diligent professional drawing upon ten yea",
                "Highly orgasdadgdsagnized and diligent professional drawing upon ten yea"
            ]
        }
    ]

    return( 
        <Container>
            <Name>Experience</Name>
            {details.map((job, index) => {
                const {company, position, dates, items} = job
                return (
                <JobContainer key={index}>
                <JobTitle><Company>{company}</Company> {position} <Dates>{dates}</Dates></JobTitle>
                <List>
                    {items.map((item, index) => {
                        return(
                            <Item key={index * 4}>{item}</Item>  
                        )
                    })}
                </List>
                </JobContainer>
                )
            })}
        </Container>
    )
}

export default Experience; 