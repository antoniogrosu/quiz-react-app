import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import {Sugar} from 'react-preloaders';

export default function TestScreen(){


    //questions state
    const [data , setData] = useState([])

    //loading state
    const [loading , setLoading] = useState(true)

    //fetch the data
    useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&difficulty=medium&type=boolean")
        .then(res => res.json())
        .then(data => {
            const arr = data.results;
            const newArr = arr.map(obj => ({...obj , id : nanoid() , value : ""}))
            const  dataArr = newArr.map(obj => ({corect : obj.correct_answer  , id : obj.id , question : obj.question ,  value : obj.value}))
            setData(dataArr)
        })
        .then(json => {
            setLoading(false)
        })
        setData(data)
    },[])

    //functions to add to the value property

    function toggleTrue(obj , id){
        const index = data.findIndex(item => item.id === id)
        const newObj ={...obj , value : "True"}
        const newArr = data.splice(index , 1 , newObj)
        data.join()
        setData(data)
    }

    function toggleFalse(obj , id){
        const index = data.findIndex(item => item.id === id)
        const newObj ={...obj , value : "False"}
        const newArr = data.splice(index , 1 , newObj)
        data.join()
        setData(data)
    }
    
    //mapping through the array to render the questions
    const questions = data.map(item =>{
        return(
            <div className="question-div" style={{width: "100%"}}>
                <h1 style={{fontFamily : "Montserrat" , color : "#293264" , fontSize : '1.25rem'}}>{item.question}</h1>
                <div style={{marginTop : "30px"}} className="buttons-div">
                    <button onClick={ () => toggleTrue( item ,item.id)}>True</button>
                    <button onClick={ () => toggleFalse( item , item.id)  } >False</button>
                </div>  
            </div>
        )})

    function submitAnswers(obj){
        setData(data)
        console.log(data)
    }    
    return(
        <>
        <div className="test-screen" style={{backgroundColor : "#F5F7FB" , display: "flex" , flexDirection:"column"}}>
            <h1 style={{fontFamily : "Inter" , color :"rgba(41, 50 , 100 , 0.35)" , width: "100%" , marginBottom : "40px" , fontSize :'1rem'}}>QUESTIONS</h1>
            {questions}
            <button onClick={submitAnswers} className="submit-test">Submit Test</button>
        </div>
        <Sugar customLoading={loading} background="#F5F7FB" color={"#4D5B9E"} />
        </>
    )
}