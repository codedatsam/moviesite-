export default  function Form(props){
    return(
        <>
            {!props.click ? <div className="body">
            <form action="submit" className="form">
                <div className="t1">
                    <label htmlFor="question">What’s your favorite movie and why?</label>
                    <textarea name="question" id="answer"></textarea>
                </div>
                    <div className="t1">
                    <label htmlFor="question">Are you in the mood for something new or a classic?</label>
                    <textarea name="question" id="answer"></textarea>
                </div>
                    <div className="t1">
                    <label htmlFor="question">Do you wanna have fun or do you want something serious?</label>
                    <textarea name="question" id="answer"></textarea>
                </div>
            </form>
          </div>
          
          : <div className="response">
            
          </div>
          }
        </>
    )
}