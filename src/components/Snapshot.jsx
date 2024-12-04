const Snapshot = (props) => {

    const snapshot = props.snapshot

    const [SHandler, XTHandler] = props.toolset

    const clickHandler = () => {
        snapshot.pull(SHandler, XTHandler)
    }

    return (
        <div>
            <p>#{props.step} - {snapshot.Time} - Шаг: {snapshot.XTurn ? "X" : "O"}<button onClick={clickHandler}>Откатить</button></p>
        </div>
    )
}

export default Snapshot