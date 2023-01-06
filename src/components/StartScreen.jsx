export default function StartScreen(props){
    return(
        <div className="start-screen" style={{backgroundColor : "#F5F7FB" , display: "flex" , alignItems : "center" , flexDirection : "column" , animation : "fade-in 1s"}}>
            <h1 style={{marginBottom : "10px" , fontFamily : "Montserrat" , fontSize: "2rem" , color : "#293264"}}>QuizAnt</h1>
            <p style={{marginBottom : "40px" , fontFamily : "Inter" , fontSize: "0.75rem" , color : "#293264"}} >Let's test your Knowledge</p>
            <button className='start-button' onClick={props.clicked} >Start Quizz</button>
        </div>
    )
}