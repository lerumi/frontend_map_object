import { Link, useParams } from "react-router-dom";
import { ROUTES, ROUTE_LABELS } from "../Routes.tsx";
import NavBar from '../components/NavBar.tsx'
import { FC, useEffect, useState} from 'react'
import { Col, Row, Spinner, Image } from 'react-bootstrap'
import TagCard from '../components/Card.tsx'
import { Tag, getTagById } from '../modules/TagsApi.tsx'
import InputField from '../components/InputField.tsx'
import './OneTagPage.css'
import { BreadCrumbs } from "../components/BreadCrumbs";
import { TAGS_MOCK } from "../modules/mock.tsx";
import image from "../assets/DefaultImage.png";

export const OneTagPage: FC = () => {
  const [pageData, setPageData] = useState<Tag>();
  const { id } = useParams(); // ид страницы, пример: "/albums/12"

  useEffect(() => {
    if (!id) return;
    const result  =  async ()=>{
        const { results } = await getTagById(id)
        if(results.length == 0)
        {
            setPageData(TAGS_MOCK.results[id-1])

        }
        else
        {
            console.log("API Response:", results)
            setPageData(results)
        }

    }
    result();
  }, [id]);

  return (
    <div>
         <NavBar
            Home={ROUTES.HOME}
            Tags={ROUTES.TAGS}
         />

      {pageData ? ( // проверка на наличие данных, иначе загрузка
      <div className = "background_sub">

            <div className ="info_sheet_tag ">
            <BreadCrumbs
                crumbs={[
                  { label: ROUTE_LABELS.TAGS, path: ROUTES.TAGS },
                  { label: pageData?.tag_name || "Тег" },
                ]}
            />
              <Row className = "row-margin">
                <Col md={6}>
                  <Image
                    src={pageData.tag_image.includes('nan')? image : pageData.tag_image}
                    className = "image single_tag row-margin"
                  />
                </Col>
                <Col md={6}>
                  <p className = "title">
                    {pageData.tag_name}
                  </p>
                  <p className = "text">
                    {pageData.tag_description}
                  </p>
                </Col>
              </Row>
            </div>
        </div>
      ) : (
        <div>{/* загрузка */}
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
};
