
import useAnalyticsEventTracker from '../component/useAnalyticsEventTracker';
export default function Home(){
    const gaEventTracker = useAnalyticsEventTracker('Home Page');
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