import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function CarouselWithContent() {
  return (
      <Carousel  infiniteLoop interval={3000}>
        <div>
            <p className='h-40 w-80 text-black'>
            <p>
              <FontAwesomeIcon icon={faStar} style={{color:"orange"}} />
              <FontAwesomeIcon icon={faStar} style={{color:"orange"}} />
              <FontAwesomeIcon icon={faStar} style={{color:"orange"}} />
              <FontAwesomeIcon icon={faStar} style={{color:"orange"}} />
              <FontAwesomeIcon icon={faStar} style={{color:"orange"}} />
            </p>
    Aaron is very good !he is the best !I suggest for everyone in the world to check him out….trust me you wont be disappointed….please go see him…
        <h1 className='mt-3'>- Prasad</h1>
      </p>
        </div>
        <div>
          <p className='h-80 w-80 text-black'>
          <p>
              <FontAwesomeIcon icon={faStar} style={{color:"orange"}} />
              <FontAwesomeIcon icon={faStar} style={{color:"orange"}} />
              <FontAwesomeIcon icon={faStar} style={{color:"orange"}} />
              <FontAwesomeIcon icon={faStar} style={{color:"orange"}} />
              <FontAwesomeIcon icon={faStar} style={{color:"orange"}} />
            </p>
          Malcolm is the best. My husband and I have worked with him a couple times and he always does what he can to get you the best deal. He is fast, efficient, explains everything so you fully understand. I’ve been to other locations but this is the only store I trust and I try to always work with Malcolm if possible because he always makes sure to get you what you need.
          <h1 className='mt-3'>- Prasad</h1>
          </p>
        </div>
        <div>
          <p className='h-80 w-80 text-black'>
            <p>
              <FontAwesomeIcon icon={faStar} style={{color:"orange"}} />
              <FontAwesomeIcon icon={faStar} style={{color:"orange"}} />
              <FontAwesomeIcon icon={faStar} style={{color:"orange"}} />
              <FontAwesomeIcon icon={faStar} style={{color:"orange"}} />
              <FontAwesomeIcon icon={faStar} style={{color:"orange"}} />
            </p>
            My experience at Boost was GREAT. Von was an excellent helper and had so much information for me and was so patient. I would recommend this Location for GREAT SERVICE.👍👍
          <h1 className='mt-3'>-Donna Barbour</h1>
          </p>
        </div>
    </Carousel>
  );
}
