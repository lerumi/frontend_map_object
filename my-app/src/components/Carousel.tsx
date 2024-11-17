import { Carousel } from 'react-bootstrap';
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
const images = [
  { src: img1, description: 'Создавайте и редактируйте новые объекты карты.' },
  { src: img2, description: 'Добавляйте подходящие теги и описания.' },
  { src: img3, description: 'Путешествуйте и делитесь особенными местами с другими!' },
];

export const CarouselComp = () => {
  return (

    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.src}
            alt={`Slide ${index + 1}`}
            style={{ height: '800px',objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>

  );
};

