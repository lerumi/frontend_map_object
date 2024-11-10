import { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import './Card.css'
import image from "../assets/DefaultImage.png";
interface Props {
   id: string
   tag_name: string
   tag_description: string
   tag_image: string
   tag_status: string
   imageClickHandler: () => void
}

const TagCard: FC<Props> = ({ tag_image, tag_name,  id, tag_description, tag_status, imageClickHandler}) => (
    <Card className="card">
        <Card.Img className="image cardImage" variant="top" src={tag_image.includes('nan')? image : tag_image} height={100} width={100}  />
        <Card.Body>
            <div className="textStyle">
                <Card.Title>{tag_name}</Card.Title>
            </div>
            <Button className="nk nk-text" onClick={imageClickHandler}>Подробнее</Button>
        </Card.Body>
    </Card>
)

export default TagCard;