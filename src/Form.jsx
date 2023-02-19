import React, { useState } from "react";

const Form = () => {
    const [FormData,setData] = useState({
        user:'',
        pass:''
    });
    const InputHandler = (event)=>{
        // console.log(event.target.value);
        // console.log(event.target.name);
        const {name,value} = event.target;
        // get value can be set to form data

        setData((preValue)=>{
            return{
                ...preValue,
                [name]:value,
            };
        });
        
        
    };

    const FormSubmit =()=>{
        alert("form submitted");
    }
    return (
        <>
            <div className="form-container">
                <form onSubmit={FormSubmit} autoComplete="of">
                    <div className="input-group">
                        <label>Username</label>
                        <input type="text" placeholder="Username" name="user" onChange={InputHandler} value={FormData.user} />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Password" name="pass" onChange={InputHandler} value={FormData.pass}/>
                    </div>
                    <div className="input-group btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;