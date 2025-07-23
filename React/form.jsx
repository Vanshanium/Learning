import { useState } from "react";

const FormComponent = () => {


    // this is a useState hook person is a state (object), Component will only re-renders when this setPerson function is called.
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: 'other'
    });


    // This function is called when we change anything in the input field. 
    const cobra = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value });      // it updates the key value pair, to get the other pairs we have to use the previous values.
        e.preventDefault()
    };

    const submission = (e) => {

        e.preventDefault();

    }

    return (

        <form>

            <div id="form-container">

                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={cobra} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={cobra} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" onChange={cobra} />
                </div>
                <div id="gender-container">
                    <label>Gender</label>
                    <div>
                        <label>
                            <input type="radio" name="gender" value="male" /> Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value="female" /> Female
                        </label>
                        <label>
                            <input type="radio" name="gender" value="other" /> Other
                        </label>
                    </div>
                </div>

            </div>

            <button type="submit" onClick={submission}>Submit</button>
        </form>
    );

}

export default FormComponent;