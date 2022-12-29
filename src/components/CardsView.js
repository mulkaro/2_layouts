import ("https://fonts.googleapis.com/icon?family=Material+Icons");

class CardsView {
    constructor(cards) {}

    render()
        {
        return(
                <div>
                {this.cards.map(item => (
                    <ShopCard name={item.name} price={item.price} color={item.color} img={item.img}/>))
                }
                </div>
              )
        }
}

export default CardsView;
    