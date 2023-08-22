import './Header.scss'
import '../../../styles/_vars.scss'

function Header(){
    return(
        <div className="header">  
            <ul className="header-nav">
                <li className="header-nav-item"><a href='#'>home</a> </li>
                <li className="header-nav-item"> <a href='#'>work</a> </li>
                <li className="header-nav-item"> <a href='#'>about</a></li>
                <li className="header-nav-item"> <a href='#'>contact</a> </li>

            </ul>
        </div>
    );
}

export default Header;