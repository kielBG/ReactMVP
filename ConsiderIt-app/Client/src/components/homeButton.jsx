
function HomeButton ({home}) {

    const handleClick = (e) => {
        home();
    }

    return <button onClick={handleClick}>ConsiderIt</button>

}

export default HomeButton