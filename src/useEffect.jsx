import { useState,useEffect, useMemo } from "react";

//Question
// export default function Posts() {  
//     const [posts, setPosts] = useState([]);  
//     const options = { userId: 1 };
//     useEffect(() => {    
//         fetch(`https://jsonplaceholder.typicode.com/posts?userId=${options.userId}`)      
//         .then(r => r.json())      
//         .then(setPosts);  
//     }, []);  
//     return <div>{posts.length}</div>; }

//Way1-use options object inside the useEffect
export default function Posts(){
    const [posts, setPosts]=useState([]);
    const options={userId:1};
    useEffect(()=>{
        
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${options.userId}`)
        .then(r=>r.json())
        .then(setPosts);
    },[options.userId]);
    return <div>{posts.length}</div>
}

//way2-use useMemo to memorize the options object
// export default function Posts(){
//     const [posts, setPosts]=useState([]);
//     const options=useMemo(()=>{
//         return {userId:1}
//     },[])
//     useEffect(()=>{
//         fetch(`https://jsonplaceholder.typicode.com/posts?userId=${options.userId}`)
//         .then(r=>r.json())
//         .then(setPosts);
//     },[options]);
//     return <div>{posts.length}</div>
// }