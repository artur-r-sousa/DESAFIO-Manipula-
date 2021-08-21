import styled from 'styled-components';

export const StyleSearch = styled.input`

    background-color: #0C2323;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-style: solid;
    border-width: 2px;
    border-radius: 25px;
    width: 60%;
    font-family: Verdana, Geneva, Tahoma, sans-serif

`

export const StyleImg = styled.img`

    border-radius: 10%;
    box-shadow: 0 0 8px 5px #47AFAF;

`

export const StyleLi = styled.li`
    

    text-align: center;  
    border-width: 5px;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
    padding-top: 25px;
    width: fit-content;
`
export const StyleCard = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const StyleLink = styled.a`

    text-decoration: none;
    color: white;
    font-weight: 400;
    margin-left: 15px;

` 

export const StyleTitle = styled.p`
    
    color: #FFF;
    font-size: larger;
    padding: 0px;
    margin-left: 10px;
    margin-bottom: 10px;

`


export const StyleSubTitle = styled.p`

    color: #47AFAF;
    font-size: smaller;
    margin-top: 0%;
    margin-left: 10px;

`

export const MainView = styled.div`
    
    border-radius: 20px;
    border-style: none;
    box-shadow: 0 0 8px 5px #000;
    color: white;
    display: flex;
    align-items: center;
    margin: 40px;
`