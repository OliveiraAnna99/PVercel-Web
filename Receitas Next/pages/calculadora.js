import dynamic from 'next/dynamic'
import styles from '../styles/Main.module.css'

function Calculadora(){
    return (
        <div className={styles.modelCalculadora}>
            <div className={styles.btnCalcColumn}>

                <div className={styles.btnCalcRow}>
                    <div className={styles.btnAc}>
                        <label className={styles.textBtnCalc}>AC</label>
                    </div>
                    <div className={styles.btnOperation}>
                        <label className={styles.textBtnCalc}>()</label>
                    </div>
                    <div className={styles.btnOperation}>
                        <label className={styles.textBtnCalc}>%</label>
                    </div>
                    <div className={styles.btnOperation}>
                        <label className={styles.textBtnCalc}>/</label>
                    </div>
                </div>
                
                <div className={styles.btnCalcRow}>
                    <div className={styles.btnNumber}>
                        <label className={styles.textBtnCalc}>7</label>
                    </div>
                    <div className={styles.btnNumber2}>
                        <label className={styles.textBtnCalc}>8</label>
                    </div>
                    <div className={styles.btnNumber2}>
                        <label className={styles.textBtnCalc}>9</label>
                    </div>
                    <div className={styles.btnOperation2}>
                        <label className={styles.textBtnCalc}>X</label>
                    </div>
                </div>
                <div className={styles.btnCalcRow}>
                    <div className={styles.btnNumber}>
                        <label className={styles.textBtnCalc}>4</label>
                    </div>
                    <div className={styles.btnNumber2}>
                        <label className={styles.textBtnCalc}>5</label>
                    </div>
                    <div className={styles.btnNumber2}>
                        <label className={styles.textBtnCalc}>6</label>
                    </div>
                    <div className={styles.btnOperation2}>
                       <label className={styles.textBtnCalc}>-</label>
                    </div>
                </div>
                <div className={styles.btnCalcRow}>
                    <div className={styles.btnNumber}>
                        <label className={styles.textBtnCalc}>1</label>
                    </div>
                    <div className={styles.btnNumber2}>
                        <label className={styles.textBtnCalc}>2 </label>
                    </div>
                    <div className={styles.btnNumber2}>
                        <label className={styles.textBtnCalc}>3</label>
                    </div>
                    <div className={styles.btnOperation2}>
                       <label className={styles.textBtnCalc}> + </label>
                    </div>
                </div>
                <div className={styles.btnCalcRow}>
                    <div className={styles.btnNumber}>
                        <label className={styles.textBtnCalc}> 0 </label>
                    </div>
                    <div className={styles.btnNumber2}>
                       <label className={styles.textBtnCalc}> , </label>
                    </div>
                    <div className={styles.btnNumber2}>
                       <label className={styles.textBtnCalc}> Del </label>
                    </div>
                    <div className={styles.btnOperation3}>
                       <label className={styles.textBtnCalc}> = </label>
                    </div>
                </div>
            </div>
          
        </div>
        
    );
}

export default Calculadora;