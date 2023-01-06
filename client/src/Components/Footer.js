import { Image } from 'semantic-ui-react';
import DonutFavicon from '../images/DonutFavicon.png';

function Footer() {
    return (
        <div id="footer">
            <p> Words and stuff</p>
            <Image src={DonutFavicon} size="small"/>
        </div>
    )
};

export default Footer;