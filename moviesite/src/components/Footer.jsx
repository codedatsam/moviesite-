
export default  function Footer(props){
    
    return(
        <>
        <div className="button">
            <button onClick={props.handleClick}>{props.click ? "Go Again" : `Let's Go`}</button>
        </div>
        
        </>
    )
}