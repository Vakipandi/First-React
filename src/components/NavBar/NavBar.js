import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {

    return (
        <nav>
            <h3>Cremaní</h3>
            <div>
                <button>Crema de Maní</button>
                <button>Miel</button>
                <button>Mermelada</button>
                <button>Stevia</button>

            </div>
            <CartWidget />
            0
        
        </nav>
    )
}

export default NavBar