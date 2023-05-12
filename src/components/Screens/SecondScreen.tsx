import React, { ChangeEvent } from 'react'
import styles from './Screen.module.css'

type SecondScreenPropsType = {
    index: number
    setNextStep: () => void
    setPreviousStep: () => void
    inputValue: string
    changeInputValueHandler: (value: string) => void
}

function SecondScreen({ index, setNextStep, setPreviousStep, inputValue, changeInputValueHandler }: SecondScreenPropsType) {

    function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        changeInputValueHandler(event.currentTarget.value)
    }
    
    return (
        <div className={styles.Container}>
            <div className={styles.ContentBox}>
                <div className={styles.Index}>{index}</div>
                <input
                    placeholder='Введите ваше имя:'
                    className={styles.Input}
                    onChange={onChangeHandler}
                    value={inputValue}>
                </input>
            </div>
            <div className={styles.ButtonBox}>
                <button
                    className={styles.FirstButton}
                    onClick={setPreviousStep}>
                    Предыдущий шаг
                </button>
                <button
                    className={styles.SecondButton}
                    onClick={setNextStep}>
                    Следующий шаг
                </button>
            </div>
        </div>
    )
}

export default SecondScreen