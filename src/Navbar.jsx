import {useAuth} from "./AuthContext";

export default function Navbar(){
    const {user, logout}=useAuth();

    return (
        <nav>
            {user?(
            <>
            <span>Welcome, {user.name}!</span>
            <button onCLick={logout}>Logout</button>
            </>
            ):(
                <span>Yoou are not Logged in.</span>
            )}
        </nav>
    )
}