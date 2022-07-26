import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './style.scss'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactUs = () => {
    const form = useRef()
    const [toSend, setToSend] = useState({
        from_name: '',
        from_email: '',
        subject: '',
        message: '',
    });

    function clearFields(event) {
        Array.from(event.target).forEach((e) => (e.value = ""));
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hl1bptd', 'template_adavlkd', form.current, 'Hizkf7pMD7CoCl5_L')
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
                alert("Message sent - be in touch soon!")
                clearFields(e);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>Contact me</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name="from_name" placeholder='Name' required
                                        value={toSend.from_name}
                                        onChange={handleChange} />
                                </li>
                                <li className='half'>
                                    <input type="email" name="from_email" placeholder='Email' required
                                        value={toSend.from_email}
                                        onChange={handleChange} />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required value={toSend.subject} onChange={handleChange} />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required value={toSend.message} onChange={handleChange}></textarea>
                                </li>
                                <li>
                                    <button type='submit' className='flat-button' >Send</button> 
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
                <div className='info-map'>
                    Jeff Schmidt
                    <br />
                    United States of America
                    <br />
                    20010 12th DR SE <br />
                    Bothell Washington <br />
                    <span>jeff.t.schmidt@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[47.8164657, -122.21652]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
                        <Marker position={[47.8164657, -122.21652]}>
                            <Popup>I live here!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}

export default ContactUs