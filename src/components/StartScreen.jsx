import blob1 from '/blobs1.png'
import blob2 from '/blobs2.png'

export default function StartScreen(props){
    return(
        <div className="start-screen" style={{backgroundColor : "#F5F7FB" , display: "flex" , alignItems : "center" , flexDirection : "column"}}>
            <h1 style={{marginBottom : "10px" , fontFamily : "Montserrat" , fontSize: "2.75rem" , color : "#293264"}}>QuizAnt</h1>
            <p style={{marginBottom : "40px" , fontFamily : "Inter" , fontSize: "1rem" , color : "#293264"}} >Let's test your Knowledge</p>
            <button className='start-button' onClick={props.clicked} >Start Quizz</button>
            <img src={blob1} className="absolute yellow"></img>
            <img src={blob2} className="absolute blue"></img>
        </div>
    )
}