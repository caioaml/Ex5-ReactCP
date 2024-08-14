import smartphoneImage from '..//image/airfryer.webp';
import './InteractiveCard.css';

const InteractiveCard = () => {
    const items = [
        {
            name: 'Fritadeira Elétrica Airfryer',
            price: "R$767,90",
            description: "a Airfryer iChef AllSpace Vision Max ainda tem espaço de sobra para transformar seus ingredientes em pratos de dar água na boca, seja para o dia a dia ou para ocasiões especiais!",
        },
    ]
    return (
        <>
            <a href="https://www.polishop.com.br/fritadeira-eletrica-airfryer-ichef-allspace-vision-max-57l/p?idsku=174869&utm_source=google&gad_source=1&gclid=EAIaIQobChMIxurg68f1hwMVr83CBB0qQgqjEAQYASABEgIXqfD_BwE">
                <div className='card'>
                    <h1>Air Fryer</h1>
                    <img src={smartphoneImage} alt="" />
                    <div className="infos">
                        {items.map((item, index) => (
                            <p key={index}>
                                <p>Nome: {item.name}</p>
                                <p>Valor: {item.price}</p>
                                <p>Descrição: {item.description}</p>
                            </p>
                        ))}
                    </div>
                </div>
            </a>
        </>
    )
}
export default InteractiveCard