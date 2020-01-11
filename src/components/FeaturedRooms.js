import React, { Component } from 'react'
import { RoomContext } from "../context"
import Room from "./Room"
import Title from './Title'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        const { featuredRooms: rooms } = this.context
        console.log(rooms);


        return (
            <div>
                hello from featured rooms
                <Room />
            </div>
        )
    }
}
