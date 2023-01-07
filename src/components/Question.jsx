export default function Question(props){


    return props.data.map( item => (
        <>
        <div  id = {item.id} className="question-div" style={{width: "100%"}}>
            <h1 style={{fontFamily : "Montserrat" , color : "#293264" , fontSize : '1.25rem'}}>{item.question}</h1>
            <div style={{marginTop : "30px"}} className="buttons-div">
                <button value="True">True</button>
                <button value="False">False</button>
            </div>
        </div>
        
        </>
    ))
}