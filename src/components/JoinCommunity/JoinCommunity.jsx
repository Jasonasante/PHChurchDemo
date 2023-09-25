import React from 'react'
import './JoinCommunity.css'
import { NavLink } from 'react-router-dom'

const JoinCommunity = ({ main, part1, part2, redirect }) => {
    return (
        <div class="three-images-wrapper">
            <div class="three-images">
                <div class="featured-image-outer">
                    <div class="featured-image-inner"
                        style={main.src ? ({ "backgroundImage": "url(" + main.src + ")" }) : ({ backgroundColor: "var(--color-primary)" })}>
                        {main && main.header && <h1>{main.header}</h1>}
                        {main && main.text && <p>{main.text}</p>}
                        {redirect && <NavLink to="/community">Start Sharing...</NavLink>}
                    </div>
                </div>

                <div class="two-images">
                    <div class="two-images-outer">
                        <div class="two-images-inner"
                            style={{ "backgroundImage": "url(" + part1.src + ")" }}>
                            {part1 && part1.text && <p>{part1.text}</p>}
                        </div>
                    </div>

                    <div class="two-images-outer">
                        <div class="two-images-inner"
                            style={{ "backgroundImage": "url(" + part2.src + ")" }}>
                            {part2 && part2.text && <p>{part2.text}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinCommunity
