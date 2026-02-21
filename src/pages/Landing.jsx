import Header from "../components/Header"
import Card from "../components/Card"
import Todo from "../components/Todo"
import { useLocation } from "react-router-dom"

function Landing() {

    const data = useLocation()

    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                {/* Header*/}
                <Header username={data.state?.user || "Guest"} />

                {/*Card*/}
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                    <Card bgcolor={"#FD6663"} title={"Febraury"} subtitle={"16:47:38"} />
                    <Card bgcolor={"#FCA221"} title={"Built using"} subtitle={"React"} />
                </div>

                {/*ToDO Container*/}
                <Todo />
            </div>
        </div>
    )
}

export default Landing