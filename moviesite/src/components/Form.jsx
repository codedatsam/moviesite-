import React from 'react'
import AI from "./AI";
export default  function Form(props){
      const[formData, setFormdata] = React.useState({question1:"",
      question2: "", question3: ""
      })
      const handleOnChange = (e) =>{
        const {name,value}  = e.target;
        setFormdata (prev => ({ ...prev, [name] : value }))
      }
      console.log(formData);
    return(
        <>
            {!props.click ? <div className="body">
            <form action="submit" className="form">
                <div className="t1">
                    <label htmlFor="answer1">What’s your favorite movie and why?</label>
                    <textarea 
                    name="question1" 
                    id="answer1"
                    value = {formData.question1}
                    onChange={handleOnChange}
                    />
                </div>
                    <div className="t1">
                    <label htmlFor="answer2">Are you in the mood for something new or a classic?</label>
                    <textarea 
                    name="question2" 
                    id="answer2"
                    value = {formData.question2}
                    onChange={handleOnChange}
                    />
                </div>
                    <div className="t1">
                    <label htmlFor="answer3">Do you wanna have fun or do you want something serious?</label>
                    <textarea 
                    name="question3" 
                    id="answer3"
                    value = {formData.question3}
                    onChange={handleOnChange}
                    />
                </div>
            </form>
          </div>
          
          : <div className="response">
            <AI
            data = {formData}
            />
          </div>
          }
        </>
    )
}