/**
 * Created by Redaa on 5/19/2018.
 */
import styled from 'styled-components'

export const CardHolder = styled.div`
    width: 20%;
    min-width: 180px;
    display: flex;
    flex-flow: column nowrap;
    font-weight: bold;
    margin: 5px 10px 10px 10px;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #dad8de;
    padding-bottom: 15px;
`

export const VideoImage = styled.img`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const VideoTitle = styled.span`
    color: #333333;
    font-size: 0.8em;
    margin: 10px 15px 5px 15px;
`

export const VideoDescription = styled.span`
    color: #C5C5C5;
    font-size: 0.7em;
    margin: 10px 15px;
`

export const ProfileLink = styled.a`
    text-decoration: none;
    color: blue;
    font-size: 1em;
`

export const Authors = styled.div`
    display: inline;
    margin: 10px 15px;
    font-size: 0.8em;
`



export const LinkButton = styled.a`

    color: #373737
    text-decoration: none;
    background-color: #fff;
    font-size: 0.75em;
    margin: 5px 15px;
`

export const CardFooter = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`

export const CardList = styled.div`
    display: flex;
    flex-flow: row wrap;
`