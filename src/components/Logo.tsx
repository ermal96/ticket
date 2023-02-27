import { Link } from 'react-router-dom';
import LogoSrc from '../assets/logo.png';
import { paths } from '../constants/paths';


const Logo = () => {
    return (
        <Link to={paths.tickets}>
            <img alt="Logo" src={LogoSrc} width={60} height={60} />
        </Link>
    )
}

export default Logo;