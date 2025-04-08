import React, { useState, useRef } from 'react';

function Registration() {
    const uname = useRef();
    const gmale = useRef();
    const gfemale = useRef();
    const sub = useRef();
    const countryRef = useRef();

    const [ndata, setNdata] = useState({
        name: "",
        gender: "",
        subscription: "",
        country: ""
    });

    const handleFormSubmission = (event) => {
        event.preventDefault(); // Prevents page refresh

        setNdata({
            name: uname.current.value,
            gender: gmale.current.checked ? "Male" : gfemale.current.checked ? "Female" : "Not Selected",
            subscription: sub.current.checked ? "Subscribed" : "Not Subscribed",
            country: countryRef.current.value
        });
    };

    return (
        <>
            <form onSubmit={handleFormSubmission}>
                Name: <input ref={uname} type="text" /><br />

                Gender: 
                <input ref={gmale} type='radio' name="gender" /> Male
                <input ref={gfemale} type="radio" name="gender" /> Female <br />

                Subscription: <input ref={sub} type="checkbox" /> <br />

                Country: 
                <select ref={countryRef}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UAE">UAE</option>
                </select> <br />

                <input type="submit" value="Submit" />
            </form>

            <h3>Form Data:</h3>
            <p>Name: {ndata.name}</p>
            <p>Gender: {ndata.gender}</p>
            <p>Subscription:{ndata.subscription}</p>
            <p>Country: {ndata.country}</p>
        </>
    );
}

export default Registration;
