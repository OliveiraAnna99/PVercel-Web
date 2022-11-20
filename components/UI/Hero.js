import React from "react";
import { Fragment } from "react";
import classes from '../../styles/hero.module.css'
const Hero = () =>{
    return(
        <Fragment>
            <div className={`${classes.container}`}>
                <img  width = "70%" align = "right" src="https://1.bp.blogspot.com/-CM38egrejbM/YKUfe68c7oI/AAAAAAAAIRY/Tgt351uyJrQ0Q5cOHta22YnaAuR5KUFoQCPcBGAsYHg/w919/loki-series-tom-hiddleston-4k-uhdpaper.com-236.1_a-thumbnail.jpg"></img>
                <h1 className={`${classes.title}`}>LOKI</h1>
                <h6 className={`${classes.subtitle}`}>Depois de roubar o Tesseract durante os eventos de Vingadores: Ultimato, uma versão alternativa de Loki é trazida para a misteriosa Autoridade de Variância Temporal (AVT), uma organização burocrática que existe fora do tempo e do espaço, e monitora a linha do tempo. Eles dão a Loki uma escolha: ser apagado da existência por ser uma "variante do tempo" ou ajudar a consertar a linha do tempo e impedir uma ameaça maior. Loki acaba preso em seu próprio thriller policial, viajando no tempo e alterando a história da humanidade</h6>
            </div>
        </Fragment>
    )
}

export default Hero;