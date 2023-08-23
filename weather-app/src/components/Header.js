import "./header.css"
import headerImg from '../assets/images/logo.png'


export default function Header() {
    return (
        <>
            <div className="header">
                
                <img className="header-img" src={headerImg} />
                <h3>Weather Forecast</h3>
            </div>
        </>
    );
}