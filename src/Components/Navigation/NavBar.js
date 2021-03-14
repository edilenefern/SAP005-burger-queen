import  React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {

    return (
        <header>        
            <nav className={styles.conteiner}>
                <ul className={styles.navigation}>

                    <li>
                        <Link to="/">Sair</Link>
                    </li>
                        
                </ul>
            </nav>
        </header>
    )
};

export default NavBar




