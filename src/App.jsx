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

  function handleChange(inputIdentifier, newValue){
    setUserinput(previusUserInput => {
      return {
        ...previusUserInput,
        [inputIdentifier] : newValue
      }
    })
  }
 
  return (
    <>
      <Header />
      <UserInput userInput = {userInput} onChange = {handleChange}/>
      <Results input = {userInput} />
    </>
  )
}

export default App
