
function HomeButton ({home, name, changeEditView}) {

    const handleClick = (e) => {
        if(name) {
            home();
            changeEditView(false);
        }
        
    }

    return(
     <div className="home" onClick={handleClick}>Consider
    <span className="highlightText">It</span>
    </div>
    )

}

export default HomeButton