import React from "react";
import GroupCard from "./GroupCard.jsx";

function GroupList({ groups, selectGroup, deleteGroup }) {
    const handleDelete = (e) => {};

    return (
        <div className={"dashboard--group-list"}>
            {groups.map((group, index) => (
                <div key={index}>
                    <GroupCard
                        group={group}
                        selectGroup={selectGroup}
                        deleteGroup={deleteGroup}
                    />
                    <div className="group-buttons">
                        <button
                            className="group-submit interactable"
                            type="submit"
                            onClick={() => selectGroup(group._id)}
                        >
                            Go To Group Page
                        </button>
                        <button
                            className="group-delete interactable"
                            type={"submit"}
                            onClick={(e) => {
                                e.preventDefault();
                                deleteGroup(group._id);
                            }}
                        >
                            Delete Group
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GroupList;
