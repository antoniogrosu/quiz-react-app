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
            <div className="question-div">
                <h1 style={{fontFamily : "Montserrat" , color : "#293264" , fontSize : '1.25rem'}}>{item.question}</h1>
                <div style={{marginTop : "30px"}} className="buttons-div">
                    <button onClick={ () => toggleTrue( item ,item.id)} style={{cursor : "pointer"}} className="choice-button">True</button>
                    <button onClick={ () => toggleFalse( item , item.id)  } style={{cursor : "pointer"}} className="choice-button" >False</button>
                </div>  
            </div>
        )})

    const [gid , setGid] = useState([])
    const [bid , setBid] = useState([{question : "" , corect : ""}])
    const [result , setResult] = useState(false)

    function submitAnswers(obj){
        setData(data)
        const resp = data.filter(obj => obj.corect === obj.value)
        const bresp = data.filter(obj => obj.corect !== obj.value)
        setGid(resp.map(obj => obj.id))
        setBid(bresp.map(obj => ({question : obj.question , corect : obj.corect})))
        console.log(bid  , gid)
        setResult(res => !res)
    }    
    const answers = bid.map( obj => (
        <>
        <p style={{fontSize : "1rem" , marginBottom : "20px" , fontFamily : "Inter" ,  textAlign : 'center'}}>{obj.question}</p>
        <p style={{fontSize : "1rem" , marginBottom : "60px" , fontFamily : "Inter" , color : "green" ,  textAlign : 'center'}}>Correct Answer : {obj.corect}</p>
        </>
        ))

    const [mistakes , setMistakes] = useState(0)
    return(
        <>
        <div className="test-screen" style={{backgroundColor : "#F5F7FB" , display: result ? "none" : "flex" , flexDirection:"column"}}>
            <h1 style={{fontFamily : "Inter" , color :"rgba(41, 50 , 100 , 0.35)" , width: "100%" , marginBottom : "40px" , fontSize :'1rem'}}>QUESTIONS</h1>
            {questions}
            <button onClick={submitAnswers} className="submit-test">Submit Test</button>
        </div>
        <div className="test-screen" style={{display : result ? "flex" : "none" , alignItems : "center" , flexDirection : "column"}}>
            <h1 style={{textAlign : "center" , marginBottom : "25px" , fontFamily : "Montserrat" , fontSize : "2.5rem" , animation : "fade-in 0.75s" ,color : "#293264"}}>Congratulations!</h1>
            <h2 style={{textAlign : "center" , marginBottom : "35px" , fontFamily : "Montserrat" , fontSize : "1.5rem"  , color : "#293264"}}>You scored {gid.length} / 5</h2>
        <div style={{animation : "fade-in 1s"}}>
                <h2 style={{fontFamily : "Montserrat" , fontSize : "1.25rem" , marginBottom : "30px" , marginTop : "60px" , color : "#4D5B9E" , textAlign : 'center'}}>YOUR MISTAKES</h2>
                {answers}
            </div>  
        </div>
        <Sugar customLoading={loading} background="#F5F7FB" color={"#4D5B9E"} />
        </>
    )
}