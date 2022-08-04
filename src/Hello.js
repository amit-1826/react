
function message() {
    return 'This is a message';
}

function Hello() {
    return <h1>Message says: {message()}</h1>
}

export default Hello;