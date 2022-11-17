import styles from '../../styles/Main.module.css'
import {fatorial, somar} from '../elementos/function-soma'
function FormSoma(){

    return(
        <div>

        <div>
            <form method='POST' action=''>
            <div className={styles.form}>
                <input id="v1" type="text" placeholder='Digite um número'></input>
            </div>
            <div className={styles.form2}>
                <input id="v2" type="text" placeholder='Digite um número'></input>
            </div>
        
            </form>
            <div className={styles.resul}>
                <h5 >Resultado: </h5><h3 id='resultado2'></h3>
            </div>
        </div>
        <div >
            <button  className={styles.botaoSomador} onClick={somar}>Somar</button>
        </div>
        </div>
    );
}

function FormFatorial(props){

    return(
        <div>

        <div>
            <form method='POST' action=''>
            <div className={styles.form}>
                <input id="fac1" type="text" placeholder='Digite um número'></input>
            </div>
        
            </form>
            <div className={styles.resul}>
                <h5 >Resultado: </h5><h3 id={props.name}></h3>
            </div>
        </div>
        <div >
            <button  className={styles.botaoSomador} onClick={fatorial}>Fatorial</button>
        </div>
        </div>
    );
}

export {FormSoma};
export {FormFatorial};