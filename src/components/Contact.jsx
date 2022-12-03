import React from 'react'
import '../styles/contact.css'
// import { vehicleMakeOptions, vehicleModelOptions } from './VehicleData';
const Contact = () => {
    // const [state, handleSubmit] = useForm("xqkjapej");
    
    // if (state.succeeded) {
    //     return <div className="SuccessfulForm">
    //         <p>Your message has gone through successfully. 
    //             We will get back to you within 1-3 bussiness days. 
    //             <br /> If you would like to speak to someone sooner, please call</p>
    //         <a className="number" href="tel:+12086177722">(208) 617-7722</a>
    //         <p>Have a wonderful day!</p>
    //     </div>;
    // }
    return (
        <form action="https://formkeep.com/f/c12d47fe0691"
            accept-charset="UTF-8"
            enctype="multipart/form-data"
            method="POST">
            <header className="contactHeader">
                <h2>Interested in working together?</h2>
                <p>Get your free quote today!</p>
            </header>
            <div className="row">
                <div className="nameAndNumber line">
                    <input className="inputField name mrgn-right" id="name" type="name" name="name" placeholder="Name" required autoComplete="off" autoFocus/>
                    <input id="number" name="number" type="tel" placeholder="(###) ###-####" className="inputField number" autoComplete="off" />
                </div>
                <div className="MakeModelYearColor line">
                    <div className='makeAndModel vehicleInputs'>
                        <input className="make inputField mrgn-right" id="make" type="text" name="make" placeholder="Make" autoComplete="off"/>
                        <input id="model" name="model" type="text" placeholder="Model" className="inputField mrgn-right" autoComplete="off" />
                    </div>
                    <div className='yearAndColor vehicleInputs'>
                        <input placeholder="Year" className="inputField mrgn-right year" type="number" id="year" name="year" min="1900" max={new Date().getFullYear()}/>
                        <input placeholder="Color" className="inputField color" type="text" id="color" name="color"/>
                    </div>
                </div>
                <div className="emailMessage">
                    <input className="subMessage email" id="email" type="email" name="email" placeholder="Email" required autoComplete="off" />
                    
                    <textarea id="message" type="text" name="message" placeholder="Message" className="subMessage" required autoComplete="off" />
                    
                </div>
                <div className="buttons inp">
                    <button type="submit" className="btnOne">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default Contact