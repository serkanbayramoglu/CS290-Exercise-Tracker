import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({setExerciseToEdit}) {
    const [exercises, setExercises] = useState([]);

    const history = useHistory();

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        if (response.status === 204){
            setExercises(exercises.filter(e => e._id !== _id));
        } else {
            console.error(`Failed to delete exercise with _is = ${_id}, status code = ${response.status}`);
        }

    }

    const onEdit = async exercise => {
        setExerciseToEdit(exercise);
        history.push("/edit-exercise");
    }

    useEffect( () => {
        loadExercises();
        },[]);

    return (
        <>
        <h2>List of Exercises</h2>
        <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseList>
        <Link to="/create-exercise">Create a new exercise</Link>
        </>
    );
}

export default HomePage;
