// import * as React from "react"
// import { useState } from "react"
// import { useLogin, useNotify, Notification } from 'react-admin';

// const LoginPage = ({ theme }) => {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const login = useLogin()
//     const notify = useNotify()

//     const handleSubmit = e => {
//         e.preventDefault();
//         login({ email, password }).catch(() => {
//             notify("Invaild Email and or password.")
//          }
//         )

//         return (
//             <form onSubmit={handleSubmit}>
//             <input
//                 name="email"
//                 type="email"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//             />
//             <input
//                 name="password"
//                 type="password"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//             />
//         </form>
//         )
//     }
// }

// export default LoginPage

// import * as React from "react";
// import { useState } from "react";
// import { useLogin, useNotify } from 'react-admin';
// import { useNavigate  } from 'react-router-dom';
// import "../../css/login.css"
// import json from "../../../backend/json/users.json"

// const LoginPage = ({ theme }) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const notify = useNotify();
//     // const history = useHistory();

//     const navigate = useNavigate();


//     const handleSubmit = async e => {
//         e.preventDefault();

//         try {
//             const response = await fetch('../');
//             const users = await response.json(json);

//             const user = users.find(u => u.email === email && u.password === password);

//             if (user) {
//                 console.log("Login successful!");

//                 // Redirect to another page
//                 navigate('/dashboard');
//             } else {
//                 // Invalid credentials
//                 notify("Invalid Email and/or password.");
//             }
//         } catch (error) {
//             console.error("Error fetching users:", error);
//             notify("Error fetching users. Please try again later.");
//         }
//     };

//     return (
//         <div className="login-container">
//             <form onSubmit={handleSubmit} className="login-form">
//                 <label>Email:</label>
//                 <input
//                     name="email"
//                     type="email"
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                 />
//                 <label>Password:</label>
//                 <input
//                     name="password"
//                     type="password"
//                     value={password}
//                     onChange={e => setPassword(e.target.value)}
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default LoginPage;

import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotify } from 'react-admin';
// import usersData from './path/to/users.json'; // Update the path to your users.json file
import usersData from "../../../backend/json/users.json"
import "../../css/login.css"

const LoginPage = ({ theme }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const notify = useNotify();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const user = usersData.find(u => u.email === email && u.password === password);

        if (user) {
            console.log("Login successful!");

            navigate('/dashboard');
        } else {
            notify("Invalid Email and/or password.");
        }
    };

    // return (
    //     <div className="login-container">
    //         <form onSubmit={handleSubmit} className="login-form">
    //             <label>Email:</label>
    //             <input
    //                 name="email"
    //                 type="email"
    //                 value={email}
    //                 onChange={e => setEmail(e.target.value)}
    //             />
    //             <label>Password:</label>
    //             <input
    //                 name="password"
    //                 type="password"
    //                 value={password}
    //                 onChange={e => setPassword(e.target.value)}
    //             />
    //             <button type="submit">Login</button>
    //         </form>
    //     </div>
    // );
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Login</h1>
                <div>
                <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
