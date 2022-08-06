function FunctionalEvent(props) {

    const handleClick = () => {
        console.log('button is clicked');
    }

    return <div>This is functional component. <button onClick={handleClick}>Click here</button> </div>
}
export default FunctionalEvent;