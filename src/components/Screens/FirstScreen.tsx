import React from 'react'
import styles from './Screen.module.css'

type ScreenPropsType = {
  index: number
  setNextStep: () => void
  setPreviousStep: () => void
}

function FirstScreen({ index, setNextStep, setPreviousStep }: ScreenPropsType) {
  
  return (
    <div className={styles.Container}>
      <div className={styles.ContentBox}>
        <div className={styles.Index}>{index}</div>
        <div>Привет, мир</div>
      </div>
      <div className={styles.ButtonBox}>
        <button
          disabled={true}
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

export default FirstScreen;