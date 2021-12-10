import React, {useState, useEffect} from "react"

function App() {
  const [type, setType] = useState('users')

  const [data, setData] = useState([])

  const [pos, setPos] = useState({
    x: 0, y: 0
  })
  // useEffect(() => {
  //   console.log('render')
  // })

  useEffect(() => {
    console.log('Type change', type)
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))


    return () => {
      console.log('clean')
    }
  }, [type])

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX, y: event.clientY
    })
  }

  useEffect(() => {
    console.log('compnenet did mount')

    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, []);

  return (
    <div>
      <h2>Resource: {type}</h2>
      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todo</button>
      <button onClick={() => setType('posts')}>Tosts</button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos)}</pre>
    </div>
  )
}

export default App;
