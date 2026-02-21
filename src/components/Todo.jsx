import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
function Todo() {

     const [activityArr, setActivityArr] = useState([
            {
                id:1,
                activity:"Go for a walk"
            },
            {
                id:2,
                activity:"Take shower"
            },
            {
                id:3,
                activity:"Have breakfast"
            }
        ])

    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <TodoForm activityArr={activityArr} setActivityArr={setActivityArr} />
                <TodoList activityArr={activityArr} setActivityArr={setActivityArr} />
            </div>
        </div>
    )
}

export default Todo