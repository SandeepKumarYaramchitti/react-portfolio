import React, {useState} from 'react'
import {HeroContainer, 
        HeroBg, 
        VideoBg,
        HeroContent,
        HeroH1,
        HeroP,
        HeroBtnWrapper,
        ArrowForward,
        ArrowRight,
        Button  } from './HeroElements'
import Video from '../../video/video.mp4'

export const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking made easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive $250 in credit towards payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                         >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}
