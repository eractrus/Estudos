import React from "react";
import students from "../../../data/student";

export default props => {

    const list = students.map((student) => {
        return (
            <li key={student.id}>
                {student.name} - {student.note}
            </li>
        )
    })

    return (
        <div>
            <ol>
                {list}
            </ol>
        </div>
    )
}