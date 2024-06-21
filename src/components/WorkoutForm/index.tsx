import { useState } from "react";
import { useWorkoutsContext } from "@/hooks/useWorkoutsContext";
import { useAuthContext } from "@/hooks/useAuthContext";

import styles from "./index.module.css"

const WorkoutForm = () => {
  const {state, dispatch} = useWorkoutsContext();
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [emptyFields, setEmptyFields] = useState<String[]>([]);
  const { state: userState } = useAuthContext();

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!userState.user) {
      setError("You must be logged in");
      return;
    }

    const workout = {title, load, reps};

    const response = await fetch('http://localhost:4000/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Authorization': `Bearer ${userState.user?.token}`,
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json();

    if (!response.ok) { 
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle('');
      setLoad('');
      setReps('');
      setError(null);
      setEmptyFields([]);
      dispatch({type: 'CREATE_WORKOUT', payload: json})
      console.log('new workout added', json);
    }
  }

  return (
    <form className={styles.createForm}>
      <h3>Add a New Workout</h3>

      <label>Excersise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? styles.fieldError : ''}
      />

      <label>Load (in KG)</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes('load') ? styles.fieldError : ''}
      />

      <label>Reps</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes('reps') ? styles.fieldError : ''}
      />

      <button onClick={handleSubmit}>Add Workout</button>
      {error && <div className={styles.errorMsg}>{error}</div>}
    </form>
  )
}

export default WorkoutForm;