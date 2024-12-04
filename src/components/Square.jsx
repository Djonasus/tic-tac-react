import './Square.css'

const Square = (props) => {

    const value = props.value
    const click = props.click
    const className = props.className


    return (
        <button onClick={click} className={'Square '+className}>{value}</button>
    )
}

export default Square