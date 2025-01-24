import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PharmItem from './components/PharmList'
import PharmList from './components/PharmList'

function App() {
  const [items, setItems] = useState([])

  function deleteItem(id) {
    const newList = items.filter((itemd, idx) => id !== idx)
    setItems(newList)
  }

  function addItem(item) {
    const newList = items.concat(item);
    setItems(newList);
  }

  useEffect(() => { setItems(["item", "item", "item"])}, [])

  return (
    <>
        <PharmList items={items} deleteItem={deleteItem} />
        <button onClick={() => addItem("item")}>+</button>
    </>
  )
}

export default App
