import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'



export default class Services extends Component {
    state = {
        services: [
            {
                icons: <FaCocktail />,
                title: "free cocktails",
                info: 'Do not open this booklet until you are told to do so While you are waiting'
            },

            {
                icons: <FaHiking />,
                title: "Endless Hiking",
                info:
                    'Do not open this booklet until you are told to do so While you are waiting'
            },

            {
                icons: <FaShuttleVan />,
                title: "free shuttles",
                info:
                    'Do not open this booklet until you are told to do so While you are waiting'
            },

            {
                icons: <FaBeer />,
                title: "strongest beer",
                info:
                    'Do not open this booklet until you are told to do so While you are waiting'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
