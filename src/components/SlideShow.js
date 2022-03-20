import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const SlideShow = ({images, interval, autoPlay, infiniteLoop}) => {
    return (
      <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
        <Carousel showThumbs={false} infiniteLoop={infiniteLoop} autoPlay={autoPlay} interval={interval}>
          {images.map(i => ( <div><GatsbyImage image={getImage(i)} /></div>))}
        </Carousel>
      </div>
    );
}

export default SlideShow
