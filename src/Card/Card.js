/**
 * Created by Redaa on 5/19/2018.
 */
import React, {Component} from 'react'
import {CardHolder, VideoImage, VideoTitle, VideoDescription, ProfileLink, Authors, LinkButton, CardFooter, Playlist, ListItem} from './Style'

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
                    <DropdownButton/>
                    <LinkButton href="#"><i class="fa fa-ellipsis-h"/></LinkButton>
                </CardFooter>
            </CardHolder>
        )
    }
})

class DropdownButton extends Component {
    constructor(props) {
        super(props)
        this.state = {visible: false}
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.onMouseLeft = this.onMouseLeft.bind(this)
    }

    onMouseEnter() {
        console.log("mouse Enter")
        this.setState({
            visible: true
        })
    }

    onMouseLeft() {
        console.log("mouse left")
        this.setState({
            visible: false
        })
    }

    render() {
        console.log("this state")
        console.log(this.state)
        if (this.state.visible === false) {
            return (
                <div>
                    <LinkButton onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeft} href="#"><i class="fa fa-youtube-play" />ADD TO PLAYLIST</LinkButton>
                </div>
            )
        }
        return (
            <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeft}>
                <LinkButton  href="#"><i className="fa fa-youtube-play" />ADD TO PLAYLIST</LinkButton>
                <Playlist>
                    <ListItem><LinkButton href="#">Lugn Yoga</LinkButton></ListItem>
                    <ListItem><LinkButton href="#">Svettig Yoga</LinkButton></ListItem>
                    <ListItem><LinkButton href="#">Yinyasa</LinkButton></ListItem>
                </Playlist>

            </div>

        )
    }

}

export default Card