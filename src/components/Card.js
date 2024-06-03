import React, { useState } from 'react';
import EditTask from '../modals/EditTask';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const categoryColors = {
        "Work": {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        "Personal": {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        "Part_time": {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        "Birthday": {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        "Other": {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    };

    const toggle = () => {
        setModal(!modal);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };

    const handleDelete = () => {
        deleteTask(index);
    };

    // Use category to determine colors
    const taskCategory = taskObj.Category;
    const colors = categoryColors[taskCategory] || categoryColors["Other"]; 

    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{ backgroundColor: colors.primaryColor }}></div>
            <div className="task-holder">
                <span className="card-header" style={{ backgroundColor: colors.secondaryColor, borderRadius: "10px" }}>{taskObj.Name}</span>
                <p className="mt-3">{taskObj.Description}</p>
                <div style={{ position: "absolute", top: "160px", left: "160px" }}>
                    <button style={{ color: colors.primaryColor, cursor: "pointer" }} onClick={() => setModal(true)}>수정</button>
                    <button style={{ color: colors.primaryColor, cursor: "pointer" }} onClick={handleDelete}>삭제</button>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};

export default Card;