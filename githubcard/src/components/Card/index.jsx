const Card = ({item}) => {
    return(
        <ul>
            <li>{item.nome}</li>
            <li>{item.description}</li>
            <img src={item.avatar} alt="avatar" />
        </ul>
    )
}
export default Card