import React, {useState, useCallback} from "react"
import ItemsList from "./ItemsList"



function App() {
  const [count, setCount] = useState(42)
  const [colored, setColored] = useState(false)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Item ${i + 1}`)
  }, [count])

  return (
    <>
      <h1 style={styles}>Countable value: {count}</h1>
      <button className={'btn btn-success'} onClick={() => setCount(prev => prev+ 1)}>aDD</button>
      <button className={'btn btn-danger'} onClick={() => setCount(prev => prev - 1)}>Remove</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Color</button>

      <ItemsList getItems={generateItemsFromAPI}/>
    </>
  )
}

export default App;