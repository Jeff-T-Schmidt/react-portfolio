import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './style.scss'

const Contact = () => {

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>Contact me</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type='text' name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required ></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
                <div className='info-map'>
                    Jeff Schmidt
                    <br />
                    United States of America,
                    <br />
                    20010 12th DR SE <br />
                    Bothell Washington <br />
                    <span>jeff.t.schmidt@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[47.8164657,-122.21652]} zoom ={13}>
                        <TileLayer url= "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
                        <Marker position={[47.8164657,-122.21652]}>  
                            <Popup>I live here!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}

export default Contact