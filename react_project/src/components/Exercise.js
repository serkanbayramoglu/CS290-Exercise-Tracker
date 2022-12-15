import React from 'react';
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";

function Exercise({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td> <AiFillEdit onClick={ () => onEdit(exercise)}/> </td>
            <td> <AiOutlineDelete onClick={ () => onDelete(exercise._id)}/> </td>
        </tr>
    );
}

export default Exercise;