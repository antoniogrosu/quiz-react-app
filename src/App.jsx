import { useState } from 'react'
import './App.css'
import StartScreen from './components/StartScreen'
import QuizScreen from './components/QuizScreen'
import blob1 from '/blobs1.png'
import blob2 from '/blobs2.png'

function App() { 

  const [quiz , setQuiz] = useState(false)

  //function to toggle the test
  function toggleTest(){
    setQuiz(prev => !prev)
  }

  return (
    <div className="App" style={{position : "relative"}}>
      {!quiz && <StartScreen clicked={toggleTest}/>}
      {quiz && <QuizScreen />}
      <img src={blob1} className="absolute yellow"></img>
      <img src={blob2} className="absolute blue"></img>
    </div>
  )
}

export default App
