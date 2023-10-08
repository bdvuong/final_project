import Group from "../models/Group.js"; // Import your Mongoose Group model

export const getGroups = async (request, response) => {
    try {
        const groups = await Group.find();
        response.status(200).json(groups);
    } catch (error) {
        console.error("An error occurred while fetching groups:", error);
        response.status(500).end();
    }
};

export const addGroup = async (request, response) => {
    const { collection, groupName, groupDescription, groupUsers } = request.body;

    try {
        // Create a new group using Mongoose model
        const newGroup = new Group({
            collection,
            groupName,
            groupDescription,
            groupUsers,
            meetingTimes: "TBD",
        });

        await newGroup.save();

        response.status(200).json({});
    } catch (error) {
        console.error("An error occurred while adding a group:", error);
        response.status(500).end();
    }
};

// Delete a group controller
export const deleteGroup = async (request, response) => {
    const { collection, _id } = request.body;

    try {
        // Delete the group using Mongoose model
        await Group.deleteOne({ collection, _id });

        response.status(200).json({ result: "Success", message: "" });
    } catch (error) {
        console.error("An error occurred while deleting a group:", error);
        response.status(500).end();
    }
};
