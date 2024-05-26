
import useAnalyticsEventTracker from '../component/useAnalyticsEventTracker';
import ReactGA from "react-analytics-ga4";
export default function Home(){
    ReactGA.event({
        category: "Home Page",
        action: "",
        label: "Home Page", // optional
        value: 1, // optional, must be a number
        nonInteraction: true, // optional, true/false
        transport: "xhr", // optional, beacon/xhr/image
    });
    //ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });
    return (
        <div>
            <h3>Home Page</h3>
            <div>
                <a href="#" onClick={()=>gaEventTracker('call')}>Home page</a>
            </div>
            <div>
                <a href="mailto:someone@example.com" onLoad={()=>gaEventTracker('email')}>Write to us</a>
            </div>
        </div>
    )
}