import './header.css'

const Header =()=>{
        return(<>
        <header>
            <div className="log">

            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Project</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <button type="button">Enguire Now</button>
        </header>
        </>)
}

export default Header;