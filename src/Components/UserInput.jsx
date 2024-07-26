import {useState} from "react"

export default function UserInput() {
  const [usereInput, setUserinput] = useState({
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
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required></input>
        </p>
        <p>
          <label>Anual Investment</label>
          <input type="number" required></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required></input>
        </p>
        <p>
          <label>Return</label>
          <input type="number" required></input>
        </p>
      </div>
    </section>
  )
}