import React from 'react'
import styles from './Screen.module.css'

type ScreenPropsType = {
    index: number
    setNextStep: () => void
    setPreviousStep: () => void
    inputValue: string
}

function ThirdScreen({ index, setNextStep, setPreviousStep, inputValue }: ScreenPropsType) {
    
    return (
        <div className={styles.Container}>
            <div className={styles.ContentBox}>
                <div className={styles.Index}>{index}</div>
                <div>{inputValue ? inputValue : 'Похоже вы ничего не ввели!'}</div>
            </div>
            <div className={styles.ButtonBox}>
                <button
                    className={styles.FirstButton}
                    onClick={setPreviousStep}>
                    Предыдущий шаг
                </button>
                <button
                    disabled={true}
                    className={styles.SecondButton}
                    onClick={setNextStep}>
                    Следующий шаг
                </button>
            </div>
        </div>
    )
}

export default ThirdScreen