import React,{ useState } from 'react'
import Toolbar from './components/Toolbar'
import Canvas from './components/Canvas'
import SaveAnimation from './components/SaveAnimation'
import ExportButtons from './components/ExportButtons'


function App() {
  const [items,setItems] = useState([]);
  const [issaving,setIsSaving] = useState(false)

  return (
    <>
    <h1 className="text-2xl font-bold text-center mt-10">Hello TravelStory!</h1>
    <Toolbar items={items} setItems={setItems} issaving = {issaving} setIsSaving = {setIsSaving}/>
    <Canvas items={items} setItems={setItems}/>
    <ExportButtons/>
    <SaveAnimation/>
    </>
  )
}

export default App
