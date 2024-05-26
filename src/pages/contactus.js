import {useEffect} from "react";
import ReactGA from "react-analytics-ga4";


export default function Contact(){
    useEffect(() => {
        ReactGA.event({
            category: 'Page',
            action: 'Contact Page'
        });
    }, []);
    return (
        <div>
            <h3>Contact Us</h3>
            <div>
                <a href="#" >Call Us</a>
            </div>
            <div>
                <a href="mailto:someone@example.com" >Write to us</a>
            </div>
        </div>
    )
}
