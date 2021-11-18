import Input from '../components/Input'
import Card from '../components/Card'

const Pages = ({userInput, setUserInput, lista, setLista}) => {
    return(
        <>
            <Input lista={lista} setLista={setLista}/>
            {lista.map((item) => <Card item={item}/>)}
        </>
    )
}
export default Pages