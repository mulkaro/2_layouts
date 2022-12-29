class ListView {
    constructor(items) {}

    render()
        {
        return(
                <div>
                {this.items.map(item => (
                    <ShopItem name={item.name} price={item.price} color={item.color} img={item.img}/>))
                }
                </div>
              )
        }
}

export default ListView;
