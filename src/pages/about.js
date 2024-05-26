
import useAnalyticsEventTracker from '../component/useAnalyticsEventTracker';
export default function Contact(){
    const gaEventTracker = useAnalyticsEventTracker('About us page');

    return (
        <div>
            <h3>About Us</h3>
            <div>
            </div>
        </div>
    )
}