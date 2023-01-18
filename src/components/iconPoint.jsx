import "../assets/styles/components/iconPoint.css"

function IconPoint({icon, text, isVisible}){
    return (
        <div className={"icon-point" + (isVisible ? " animate-icon-point" : "")}>
            <img src={icon} alt="" className="icon-point__img" />
            <span className="icon-point__text">{text}</span>
        </div>
    );
}

export default IconPoint;