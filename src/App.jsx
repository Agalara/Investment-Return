import { useState } from "react"
import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Results from "./Components/Results"

function App() {
  const [userInput, setUserinput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const inputIsValid = (userInput.duration >= 1)
  function handleChange(inputIdentifier, newValue){
    setUserinput(previusUserInput => {
      return {
        ...previusUserInput,
        [inputIdentifier] : +newValue // Converts the string to number
      }
    })
  }
 
  return (
    <>
      <Header />
      <UserInput userInput = {userInput} onChange = {handleChange}/>
      {!inputIsValid && (
        <p className="center">Please, enter a duration greater than 0.</p>
      )}
      {inputIsValid && <Results input = {userInput} /> }
    </>
  )
}

export default App
