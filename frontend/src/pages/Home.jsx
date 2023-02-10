import { useEffect } from "react";
import "./home.css";
import { useWorkoutsContext } from "../components/hooks/useWorkoutsContext";

import WorkoutContents from "../components/WorkoutContents";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
	const { workouts, dispatch } = useWorkoutsContext();

	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch("http://localhost:5000/api/workouts");
			const json = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_WORKOUTS", payload: json });
			}
		};

		fetchWorkouts();
	}, [dispatch]);

	return (
		<div className="home">
			<div className="workouts">
				{workouts &&
					workouts.map((workout) => (
						<WorkoutContents key={workout._id} workout={workout} />
					))}
			</div>
			<WorkoutForm />
		</div>
	);
};
export default Home;
