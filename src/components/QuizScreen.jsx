import Question from "./Question"
export default function TestScreen(){
    return(
        <div className="test-screen" style={{backgroundColor : "#F5F7FB" , display: "flex" , flexDirection:"column"}}>
            <h1 style={{fontFamily : "Montserrat" , color :"rgba(41, 50 , 100 , 0.35)" , width: "100%" , marginBottom : "75px" , fontSize :'1rem'}}>QUESTIONS</h1>
            <Question />
        </div>
    )
}