import React from 'react';

function GroupCard({ group, selectGroup, deleteGroup }) {
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
        </div>
    );
}

export default GroupCard;