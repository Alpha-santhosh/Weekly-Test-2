import './style-card.css'
const Card =(props)=>{
    return(
        <div className="card">
            <div className="img_holder">
            <img src={props.url} alt="" />
            </div>
            <h3>{props.name}</h3>
        </div>
    );
}

export default Card;