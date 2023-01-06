import {Image, Segment, Divider} from 'semantic-ui-react';
import DonutFavicon from '../images/DonutFavicon.png';

function Footer() {
    return (
        <div id="footer">
            <div class='ui divider'></div>
            <Image src={DonutFavicon} size="tiny"/>
            <p> Words and stuff</p>
        </div>
    )
};

export default Footer;