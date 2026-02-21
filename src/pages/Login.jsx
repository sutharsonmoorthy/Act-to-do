import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


function Login(props) {

    const [eusername, setEUsername] = useState()
    const [epassword, setEPassword] = useState()
    const [ruser, setRuser] = useState(true)
    const navigate = useNavigate()

    const users = props.users

    function handleUInput(e) {
        setEUsername(e.target.value)
    }

    function handlePInput(e) {
        setEPassword(e.target.value)
    }

    function checkuser() {

        var userfound = false

        console.log("Current Users:", users); 
        console.log("Entered:", eusername, epassword);

        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("Log in succesful")
                userfound = true
                navigate("/landing", { state: { user: eusername } })
            }
        })

        if (userfound === false) {
            console.log("login failed")
            setRuser(false)
        }
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {
                    ruser ? <p>I Help you manage activities after login</p> : <p className="text-red-400">Please signup before login</p>
                }


                <div className="flex flex-col gap-3 my-2">
                    <input type="text"
                        className="w-52 border-black bg-transparent border rounded-md"
                        placeholder="username"
                        onChange={handleUInput}></input>

                    <input type="text"
                        className="w-52 border-black bg-transparent border rounded-md"
                        placeholder="Password"
                        onChange={handlePInput}></input>

                    <button className="bg-[#8272DA] w-24 border rounded-md p-1" onClick={checkuser}>Login</button>

                    <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login