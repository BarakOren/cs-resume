import styled from "styled-components";

const Container = styled.div`
    width: 100%;
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
    margin: 0;
`

const Company = styled.span`
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 10px;
`

const Description = styled.p`
    font-size: 16px;
    margin: 5px 0;
    font-style: italic;
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
            company: "Wolt",
            position: "Chat Customer Support, Tel Aviv, Israel.",
            dates: "(Aug 2022– Present)",
            description: "Handle multiple different customers simultaneously, using live chat to assist with different issues requiring knowledge in the company`s complex systems and fast problem-solving skills.",
            items: [
                "Handling between 60 to 90 chats and issues per day.",
                "Successfully keeping customer satisfaction rating up to 87%.",
                "Writing on daily bases complex formulations to please and compensate the customer for critical errors in deliveries and orders."
            ]
        },
        {
            company: "Apple",
            position: "Tier 1 Technical Support, Athens",
            dates: "(Jul 2019 - Aug 2020)",
            description: "Assist customers with difficult technical issues in different Apple devices using Apple`s large database and information on the different products, bugs and issues. requiring long and personalized care for each situation and issue.",
            items: [
                "Troubleshooting 10 to 20 complex issues over the phone per day.",
                "Carefully explain correct ways and best practices of using different devices.",
                "Communicating with Tier 2 technical specialists to reflect and consult about high level of technical issues in different apple devices."
            ]
        },
        {
            company: "Held",
            position: "Branch Manager",
            dates: "(Sep 2018 - Jun 2019)",
            description: "Managed a new branch of one of the best photography/printing stores in the country.",
            items: [
                "Managing and guiding a small team to provide the best customer service possible",
                "Responsible for sales increases and profit growth of the new store using different sales and other techniques.",
                "Working closely with the design and sales teams to keep the new branch profitable.",
                "Using different printers and techologies on daily bases",
                "Working closely with big clients to design their products and needs, using Adobe photoshop and different softwares."
            ]
        },
        {
            company: "The Button. (Mobileye)",
            position: "Sales Position.",
            dates: "(Mar 2016 - Aug 2017)",
            description: "Cold phone sales of the subsidiary product of one of the biggest tech compinies in israel - mobileye, life saving car accident related product.",
            items: [
                "Around 20 cold calls to potential clients.",
                "Using different scripts and techniques on daily bases.",
            ]
        },
        {
            company: "Printing shop owner",
            position: "Taking over the family printing/gift shop.",
            dates: "(Mar 2015 - Aug 2016)",
            description: "Developed and managed my famliy's printing shop",
            items: [
                "Working closely with customer and designed custom printed gifts to provide the best customer satisfaction.",
                "Working with different suppliers on regular bases.",
            ]
        },
    ]

    return( 
        <Container>
            <Name>Experience</Name>
            {details.map((job, index) => {
                const {company, description, position, dates, items} = job
                return (
                <JobContainer key={index}>
                <Company>{company}</Company>
                <JobTitle> {position} <Dates>{dates}</Dates></JobTitle>
                <Description>{description}</Description>
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