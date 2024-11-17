import { FC } from 'react'
import { Button } from 'react-bootstrap'
import './InputField.css'
import searchIcon from '../assets/search.svg'

interface Props {
    value: string
    setValue: (value: string) => void
    onSubmit: () => void
    loading?: boolean
    placeholder?: string
    buttonTitle?: string
}

const InputField: FC<Props> = ({ value, setValue, onSubmit, loading, placeholder}) => (
    <div className="inputField">
        <input value={value} placeholder={placeholder} onChange={(event => setValue(event.target.value))}/>
        <Button className="search_btn" disabled={loading} onClick={onSubmit}><img src={searchIcon} className="icon" /> </Button>
    </div>
)

export default InputField