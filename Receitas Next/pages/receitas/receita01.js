import dynamic from 'next/dynamic'
import styles from '../../styles/Main.module.css'
import Calculadora from '../calculadora';
import {Pet} from '../virtual-pet';

function Receita1(){
    return(
        <div>
            <div className={styles.introReceita}>
                <h1 className={styles.titleReceita}>Receita 01</h1>
                <h6> 1. Criando novos arquivos js no diretório pages e exibindo as funções default</h6>
                <div className={styles.contentCalc}>
                    <br></br>
                    <p className={styles.textInfo}>
                        Adicionando arquivo "calculadora.js" dentro do diretório pages, elemento que determina os componentes que
                        formam a imagem de uma calculadora que em breve será capaz de realizar operações matemáticas, simples.
                        Observe que no processo foi utilizado o export default, como a questão sugere, uma vez que esse comando basicamente indica que o componente
                        por padrão será interpretado como uma página HTML
                    </p>
                    <Calculadora/>
                </div>
            </div>
            <div className={styles.introReceita}>
                <br></br>
                <br></br>
                <br></br>
                
                <h6> 2. Criando novos arquivos js no diretório pages sem utilizar usar o 'default'</h6>
            
                <div className={styles.contentCalc}>
                    <br></br>
                    <p className={styles.textInfo2}>
                    Adicionando arquivo "virtual-pet.js" dentro do diretório pages, porém ao invés de exportar essa função 
                    como um default, vamos apenas determinar-lá como uma função comum e utilizar as chaves, tanto na exportação quanto na
                    importação para que o navegador seja capaz de interpretar esse código sem problemas.
                    
                    </p>
                    
                </div>
                
            </div>
            <div>
                <Pet/>
            </div>
      </div>

    );
}

export default Receita1;