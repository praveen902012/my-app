
import {useEffect} from "react";
import ReactGA from "react-analytics-ga4";
export default function Contact(){
    useEffect(() => {
        ReactGA.event({
            category: 'Page',
            action: 'About Page'
        });
    }, []);
    return (
        <div>
            <h3>About Us</h3>
            <div>
            </div>
        </div>
    )
}