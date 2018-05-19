/**
 * Created by Redaa on 5/19/2018.
 */
import React from 'react'
import {CardHolder, VideoTitle, VideoDescription, ProfileLink, Authors, AddToPlaylistButton} from './Style'

const Card = () => ({
    render() {
        return (
            <CardHolder>
                <img src="./../yoga1.jpg" />
                <VideoTitle>Card title</VideoTitle>
                <Authors>
                    <ProfileLink>Yin</ProfileLink> with <ProfileLink>Johanna alvin</ProfileLink>
                </Authors>
                <VideoDescription>card description lorem epsum bla bla blabla blablabla blablabla blablabla blablabla bla</VideoDescription>
                <AddToPlaylistButton href="#">ADD TO PLAYLIST</AddToPlaylistButton>
            </CardHolder>
        )
    }
})

export default Card