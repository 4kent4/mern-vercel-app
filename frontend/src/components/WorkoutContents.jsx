import { BsTrash } from "react-icons/bs";
import { useWorkoutsContext } from "./hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutContents = ({ workout }) => {
	const { dispatch } = useWorkoutsContext();

	const handleClick = async () => {
		const response = await fetch(
			"http://localhost:5000/api/workouts/" + workout._id,
			{
				method: "DELETE",
			}
		);
		const json = await response.json();

		if (response.ok) {
			dispatch({ type: "DELETE_WORKOUT", payload: json });
		}
	};

	return (
		<div className="workout-details">
			<h4>{workout.title}</h4>
			<div className="output">
				<p>Load (kg): </p>
				{workout.load}
			</div>
			<div className="output">
				<p>Reps: </p>
				{workout.reps}
			</div>
			<p>
				{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
			</p>
			<span onClick={handleClick}>{<BsTrash />}</span>
		</div>
	);
};
export default WorkoutContents;
