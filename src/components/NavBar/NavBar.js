import CartWidget from "../CartWidget/CartWidget"
import React from "react"
import styles from './navBar.module.css'
import { NavLink , Link } from "react-router-dom"

const NavBar = () => {

    return (
        <>
        <nav className={styles.Navbar}>
            <Link to='/'>
                <h3 >Cremaní</h3>
            </Link>
           
            <div className={styles.Botones}>
                <NavLink to={`/category/crema`} className={ styles.Boton }>Cremas</NavLink>
                <NavLink to={'/category/miel'} className={ styles.Boton }>Endulzantes</NavLink>
                <NavLink to={'/category/mermelada'} className={ styles.Boton }>Mermeladas</NavLink>
                <NavLink to={'/category/stevia'} className={ styles.Boton }>Stevia</NavLink>
                {/* <button className={styles.Boton}>Cremas</button>
                <button className={styles.Boton}>Endulzantes</button>
                <button className={styles.Boton}>Mermeladas</button>
                <button className={styles.Boton}>Stevia</button> */}

            </div>
            <CartWidget />
            
        
        </nav>
        </>
    )
}

export default NavBar