'use client'

import axios from "axios";
import { useState } from "react";

export function Signup(){

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");


    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center h-[200px]">
            
            <div className=" flex-col justify-center items-center border border-slate-500 rounded">
                <input 
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                className="p-1.5 m-2 border border-slate-200"
                type="text" placeholder="email" /> <br/>

                <input 
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                className="p-1.5 m-2 border border-slate-200"
                type="password" placeholder="password" /> <br/>

                <div className="flex justify-center ">
                    <button
                    className="cursor-pointer border pl-3 pr-3 p-1 m-2"
                    onClick={() => {
                        axios.post("http://localhost:3000/api/user", {
                            email,
                            password
                        }, {
                            headers: {
                                "Content-type": "application/json"
                            }
                        })
                    }}>Sign up</button>

                </div>
            </div>

        </div>
    </div>
}