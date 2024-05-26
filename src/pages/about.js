
import useAnalyticsEventTracker from '../component/useAnalyticsEventTracker';
export default function Contact(){
    const gaEventTracker = useAnalyticsEventTracker('About us page');
    return (
        <div>
            <h3>About Us</h3>
            <div>
                <a href="mailto:someone@example.com" onLoad={()=>gaEventTracker('email')}>Email</a>
            </div>
        </div>
    )
}