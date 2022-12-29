class IconSwitch {
    constructor(selIcon) {
        this.icon = selIcon;
        this.logtext = "Выбран режим " + selIcon
    }

    handleClick = () => {console.log(this.logtext)};

    render() {
        return(
            <div>
                <IconSwitch icon={this.icon} onSwitch={handleClick}/>    
            </div>
        )
    }
}

export default IconSwitch;
