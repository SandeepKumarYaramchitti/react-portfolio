import React from 'react'
import {HeroContainer, 
        HeroBg, 
        VideoBg} from './HeroElements'
import Video from '../../video/video.mp4'

export const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
        </HeroContainer>
    )
}
