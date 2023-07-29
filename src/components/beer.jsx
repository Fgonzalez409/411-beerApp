const Beer = (props) => {
    return (
    <li className="item" key={props.id}>
        <h2>{props.name}</h2>
        <img className="item__image" 
        src={props.image} 
        alt={props.name} />
    </li>
    )
}
export default Beer