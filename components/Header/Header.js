import React from "react"
import { Container } from "reactstrap";
import classes from './header.module.css'
import Link from "next/link";

const NAV_LINK = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: '/movies3',
        display: 'Movies'
    }

]

const Header = ()=>{
    return (
        <div>
            <header className={`${classes.header}`}>
                <Container>    
                    <title>MovieWeb - Página Incial</title>
                    <div className={`${classes.nav_wrapper}`}>
                        {/*====== Navigation Logo ===== */ }
                        <div className={`${classes.logo}`}>
                            <h1><span>MOV</span>i3</h1>
                        </div>
                        {/*====== Nav Menu ===== */ }
                        <div className={`${classes.navigation}`}>
                           <div className={`${classes.nav_menu}`}>
                                {
                                    NAV_LINK.map((item, index) => (
                                        <Link href={item.path} key={index}>{item.display}</Link>
                                    ))
                                }
                           </div>
                        </div>

                    </div>
                </Container>
            </header>

            
        </div>
    )
}

export default Header;