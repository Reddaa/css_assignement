/**
 * Created by Redaa on 5/19/2018.
 */
import React from 'react'
import {CardHolder, VideoImage, VideoTitle, VideoDescription, ProfileLink, Authors, LinkButton, CardFooter} from './Style'

const Card = () => ({
    render() {
        return (
            <CardHolder>
                <VideoImage src="./../yoga1.jpg" />
                <VideoTitle>Card title</VideoTitle>
                <Authors>
                    <ProfileLink>Yin</ProfileLink> with <ProfileLink>Johanna alvin</ProfileLink>
                </Authors>
                <VideoDescription>card description lorem epsum bla bla blabla blablabla blablabla blablabla blablabla bla</VideoDescription>
                <CardFooter>
                    <LinkButton href="#"><i class="fa fa-youtube-play"/> ADD TO PLAYLIST</LinkButton>
                    <LinkButton href="#"><i class="fa fa-ellipsis-h"/></LinkButton>
                </CardFooter>
            </CardHolder>
        )
    }
})

export default Card