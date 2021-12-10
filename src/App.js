import React, {useState, useEffect} from "react"

function useLogger(value) {
  useEffect(() => {
    console.log('Value changed: ', value)
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: {value, onChange},
    value,
    clear
  }
}

function App() {
  const input = useInput('')
  const lastName = useInput('')

  useLogger(input.value)

  return (
    <div className={'container pt-3'}>

      
      <input type="text" { ...input.bind } />
      <input type="text" {...lastName.bind } />
      <button className="btn" onClick={() => input.clear()}>Clear</button>
      <hr/>
      <h1>{input.value} {lastName.value}</h1>
      <hr/>
      <a href="https://usehooks.com/">useHooks</a>
    </div>
  )
}

export default App;
