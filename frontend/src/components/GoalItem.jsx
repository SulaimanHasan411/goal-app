import {useDispatch} from "react-redux";
import {deleteGoal, updateGoal} from '../features/goals/goalSlice';
import {FaEdit} from "react-icons/fa";
import {useState} from "react";

function GoalItem({goal}) {
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(goal.text);

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleInputChange = (e) => {
        setEditedText(e.target.value);
    }

    const handleUpdatedSubmit = (e) => {
        e.preventDefault();
        dispatch(updateGoal({ goalId: goal._id, goalData: { text: editedText } }));
        setIsEditing(false);
    }

    return (
        <div className="goal">
            <div>
                {new Date(goal.createdAt).toLocaleString('en-US')}
            </div>

            {isEditing ? (
                <form onSubmit={handleUpdatedSubmit}>
                    <input type="text" value={editedText} 
                        onChange={handleInputChange} autoFocus/>
                    <button type="submit">Save</button>
                </form>
            ) : (
                <h2>{goal.text}</h2>
            )}

            <button onClick={() => dispatch(deleteGoal(goal._id))} 
                className="close">X</button>

            {!isEditing && (
                <button onClick={handleEditClick} className="edit">
                    <FaEdit />
                </button>
            )}

        </div>
    );
}

export default GoalItem;