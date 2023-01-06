import { useEffect, useState } from "react"

export default function Question(){

    //questions state
    const [questions , setQuestions] = useState([])

    //fetch the data
    useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&difficulty=medium&type=boolean")
        .then(res => res.json())
        .then(data => setQuestions(data.results))
    },[])
    return questions.map( item =>(
        <div className="question-div" style={{width: "100%"}}>
            <h1 style={{fontFamily : "Montserrat" , color : "#293264" , fontSize : '1.25rem'}}>{item.question}</h1>
            <div style={{marginTop : "30px"}} className="buttons-div">
                <button>True</button>
                <button>False</button>
            </div>
        </div>
    ))
}