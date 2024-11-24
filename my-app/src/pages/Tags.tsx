import { ROUTES, ROUTE_LABELS } from "../Routes.tsx";
import { FC, useState, useEffect} from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import TagCard from '../components/Card.tsx'
import { Tag, getTags } from '../modules/TagsApi.tsx'
import InputField from '../components/InputField.tsx'
import { useNavigate } from "react-router-dom";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { TAGS_MOCK } from "../modules/mock.tsx";
import './Tags.css'
import {useData, setDataAction} from "../slices/dataSlice";
import {useDispatch} from "react-redux";
export const TagList: FC = () => {
    //const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [tags, setTag] = useState<Tag[]>([])
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const searchName = useData()

    const handleSearch = async () =>{
        setLoading(true)
        console.log(searchName)
        const { results } = await getTags(searchName)
        console.log(results)
        if(results.length == 0)
        {
            setTag(
              TAGS_MOCK.results.filter((item) =>
                item.tag_name.toLocaleLowerCase().startsWith(searchName.toLocaleLowerCase()))
                )
            setLoading(false)
        }
        else
        {
            setTag(results.filter(item => item.tag_status == true))
            setLoading(false)
        }
        dispatch(setDataAction(searchName))

    }

    useEffect(() => {
        handleSearch()
    }, [])
    const handleCardClick = (id: number) => {
        navigate(`${ROUTES.TAG}/${id}`);
    };

      return (
        <>
            <div className={`container ${loading && 'containerLoading'}`}>
                {loading && <div className="loadingBg"><Spinner animation="border" />
                </div>}
                <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.TAGS }]} />
                <InputField
                    value={searchName}
                    setValue={(value) => dispatch(setDataAction(value))}
                    loading={loading}
                    onSubmit={handleSearch}
                />
                {!tags.length &&
                    <div>
                        <h1>К сожалению, пока ничего не найдено :(</h1>
                    </div>
                }

                <div className="cards__wrapper">
                    {tags.map((item, index) => (

                                <TagCard
                                    id={item.id}
                                    tag_name={item.tag_name}
                                    tag_description={item.tag_description}
                                    tag_image={item.tag_image}
                                    tag_status={item.tag_status}
                                    imageClickHandler={() => handleCardClick(item.id)}
                                />

                    ))}
                </div>
            </div>
        </>
    )
}