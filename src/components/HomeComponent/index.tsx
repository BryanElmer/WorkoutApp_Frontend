"use client";

import { useEffect } from "react";
import { useWorkoutsContext } from "@/hooks/useWorkoutsContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { List } from "antd";

import WorkoutDetails from "../WorkoutDetails/index";
import WorkoutForm from "../WorkoutForm/index";
import styles from "./index.module.css";

const Home = () => {
  const { state, dispatch } = useWorkoutsContext();
  const { state: userState } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/workouts`, {
          headers: {
            'Authorization': `Bearer ${userState.user?.token}`
          }
        });
        const json = await response.json();
      
        if (response.ok) {
          dispatch({type: 'SET_WORKOUTS', payload: json})
        } else {
          console.error('Failed to fetch workouts.');
        }
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    if (userState) {
      fetchWorkouts();
    }
  }, [dispatch, userState]); // 2nd arg if empty only render once when first rendered

  return (
    <div className={styles.home}>
      <div className={styles.workouts}>
        {/* {state.workouts && state.workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))} */}
        {state.workouts && <List
          itemLayout="vertical" // Change to 'vertical' if you prefer vertical layout
          dataSource={state.workouts || []}
          renderItem={(workout) => (
            <List.Item key={workout._id} className={styles.listItem}>
              <WorkoutDetails key={workout._id} workout={workout} />
            </List.Item>
          )}
        />}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;