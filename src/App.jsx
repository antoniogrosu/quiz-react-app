import { useState } from 'react'
import './App.css'
import StartScreen from './components/StartScreen'

function App() { 

  const [quiz , setQuiz] = useState(false)

  //function to toggle the test
  function toggleTest(){
    setQuiz(prev => !prev)
  }

  return (
    <div className="App">
      {!quiz && <StartScreen clicked={toggleTest}/>}
    </div>
  )
}

export default App
