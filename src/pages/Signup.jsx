import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Navigate } from "react-router-dom"

function Signup(props) {

    const users = props.users
    const setUsers = props.setUsers
    const navigate = useNavigate()

    const [eusername, setEUsername] = useState()
    const [epassword, setEPassword] = useState()


    function handleUInput(e) {
        setEUsername(e.target.value)
    }

    function handlePInput(e) {
        setEPassword(e.target.value)
    }

    function addUser(){
        setUsers([...users, {username:eusername,password:epassword}])
        navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign up here</p>

                <div className="flex flex-col gap-2 my-2">
                    <input type="text"
                        className="w-52 border-black bg-transparent border rounded-md"
                        placeholder="username"
                        onChange={handleUInput}></input>

                    <input type="text"
                        className="w-52 border-black bg-transparent border rounded-md"
                        placeholder="Password"
                        onChange={handlePInput}></input>

                    <input type="text"
                        className="w-52 border-black bg-transparent border rounded-md"
                        placeholder="Confirm Password"></input>

                    <button className="bg-[#edf435] w-24 border-black border rounded-md p-1" onClick={addUser}>Sign Up</button>

                    <p>Already have an account <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup