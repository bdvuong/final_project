import React from 'react';

function Group({ group, onSelect, deleteGroup }) {

    const handleDelete = (e) => {
        e.preventDefault();
        deleteGroup(group._id);
    }

    return (
        <div className="group">
            <h3>{group.groupName}</h3>
            <p>{group.groupDescription}</p>
            <ul>
                {group.groupUsers.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
            <p>Possible Group Meeting Times: {group.meetingTimes}</p>
            <button
                className="group-btn"
                type="submit"
                onClick={() => onSelect}
            >
                Go To Group Page
            </button>
            <button
                className={"delete-btn"}
                type={"submit"}
                onClick={(e) => handleDelete(e)}
            >
                Delete Group
            </button>
        </div>
    );
}

export default Group;
