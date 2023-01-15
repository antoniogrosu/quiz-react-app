import Question from "./Question"
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
    },[])

    // function toggleAnswer(obj ,id ,event){
        // const value = event.target.value
        // const index = data.indexOf(elem => elem.id == id)
        // const newObj = {...obj , value : value}
        // setData(data.splice(index , 1 , newObj))
    // }
    const obj = data[1]
    data.splice(1 , 1 , {...obj , value:"true"})
    console.log(data)
    return(
        <>
        <div className="test-screen" style={{backgroundColor : "#F5F7FB" , display: "flex" , flexDirection:"column"}}>
            <h1 style={{fontFamily : "Montserrat" , color :"rgba(41, 50 , 100 , 0.35)" , width: "100%" , marginBottom : "75px" , fontSize :'1rem'}}>QUESTIONS</h1>
            <Question data ={data} />
        </div>
        <Sugar customLoading={loading} background="#F5F7FB" color={"#4D5B9E"} />
        </>
    )
}