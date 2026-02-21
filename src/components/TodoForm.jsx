import { useState } from "react"

function TodoForm(props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newActivity,setNewactivity] = useState("")

    function handleChange(e){
        setNewactivity(e.target.value)
    }

    function addActivity(){
        setActivityArr([...activityArr,{id: Date.now(), activity:newActivity}])
        setNewactivity("")
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Managae Activities</h1>

            <div>
                <input value={newActivity} onChange={handleChange} type="text" className="bg-transparent border border-black p-1" placeholder="Next activity" />
                <button onClick={addActivity} className="bg-black border border-black text-white p-1">Add</button>
            </div>
        </div>
    )
}

export default TodoForm