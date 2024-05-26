
import ReactGA from "react-analytics-ga4";
import {useEffect} from "react";
export default function Home(){
    useEffect(() => {
        ReactGA.event({
            category: 'Page',
            action: 'Home Page'
        });
    }, []);
    return (
        <div>
            <h3>Home Page</h3>
            <div>
                <a href="#" >Home page</a>
            </div>
            <div>
                <a href="mailto:someone@example.com" >Write to us</a>
            </div>
        </div>
    )
}