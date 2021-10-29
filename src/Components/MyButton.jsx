function MyButton(props) {
    console.log('MyButton props', props)
    const style = {
        color: props.color
    }
    return <button style={style}>Cia butonas is components</button>
}

export default MyButton