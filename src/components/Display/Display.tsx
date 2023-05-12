import React, { useState } from 'react'
import styles from './Display.module.css';
import FirstScreen from '../Screens/FirstScreen';
import SecondScreen from '../Screens/SecondScreen';
import ThirdScreen from '../Screens/ThirdScreen';

function Display() {
    const [step, setStep] = useState<number>(1)
    const [inputValue, setInputValue] = useState<string>('')

    function setNextStep() {
        setStep(step + 1)
    }

    function setPreviousStep() {
        setStep(step - 1)
    }

    function changeInputValueHandler(value: string) {
        setInputValue(value)
    }
    
    return (
        <div className={styles.Container}>
            {step === 1 && <FirstScreen index={step} setNextStep={setNextStep} setPreviousStep={setPreviousStep} />}
            {step === 2 && <SecondScreen index={step} setNextStep={setNextStep} setPreviousStep={setPreviousStep} inputValue={inputValue} changeInputValueHandler={changeInputValueHandler} />}
            {step === 3 && <ThirdScreen index={step} setNextStep={setNextStep} setPreviousStep={setPreviousStep} inputValue={inputValue} />}
        </div>
    )
}

export default Display