import avatar from '../images/avatar.webp'

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">WanYi App</span>
            <ul className="list">
                <li className="listItem">
                    <img src={avatar} alt="avatar" className="avatar"/>
                </li>
                <li className="listItem">John Doe</li>
                <li className="listItem">Logout</li>
            </ul>
        </div>
    )
}

export default Navbar