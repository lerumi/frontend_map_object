import { FC } from 'react'
import './HomePage.css'
import { CarouselComp } from '../components/Carousel.tsx';
export const HomePage: FC = () => {
  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px' }}>

      <div style={{ width: '100%' }}>
        <CarouselComp />
      </div>
      <p className="text_homePage fade-in" style={{ textAlign: 'center' }}>
        Добро пожаловать!
      </p>
    </div>


      )
}