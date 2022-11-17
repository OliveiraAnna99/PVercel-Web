import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Main.module.css';

function Navbar(){
    
    return (
        <div className={styles.navbar}>
            <ul>
                <li><a href="/">Página Inicial</a></li>
            
                <li><a href="/contact">Contato</a></li>
                <li><a href="#">Sobre</a></li>
                <li>
                    <a href="/all_receitas">Receitas</a>
                </li>
            </ul>           
        </div>
        
    
    );
 }

 export default Navbar;