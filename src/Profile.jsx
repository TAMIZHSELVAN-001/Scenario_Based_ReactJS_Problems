import { useAuth } from "./AuthContext";

export default function Profile(){
    const {user}=useAuth();
    return (
        <div>
            <h2>Profile Page</h2>

            {user ? (
                <p>Welcome, {user.name}!</p>
            ) : (
                <p>Please log in to view your profile.</p>
            )}
        </div>
    );
}