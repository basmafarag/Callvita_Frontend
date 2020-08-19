import React, { useState, useEffect } from "react";
import TaskDataService from "../services/TaskService";

const Task = props => {
  const initialTaskState = {
    id: null,
    title: "",
    description: "",

  };
  const [currentTask, setCurrentTask] = useState(initialTaskState);
  const [message, setMessage] = useState("");

  const getTask = id => {
    TaskDataService.get(id)
      .then(response => {
        setCurrentTask(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTask(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTask({ ...currentTask, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentTask.id,
      title: currentTask.title,
      description: currentTask.description,
      published: status
    };

    TaskDataService.update(currentTask.id, data)
      .then(response => {
        setCurrentTask({ ...currentTask});
      })
      .catch(e => {
        console.log(e);
      });
  };


  const updateTask = () => {
    TaskDataService.update(currentTask.id, currentTask)
      .then(response => {
        setMessage("The task was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTask = () => {
    TaskDataService.remove(currentTask.id)
      .then(response => {
        props.history.push("/tasks");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return(
    <div>
      {currentTask ? (
        <div className="edit-form">
          <h4>Task</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentTask.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentTask.description}
                onChange={handleInputChange}
              />
            </div>

             </form>

         
          <button className="badge badge-danger mr-2" onClick={deleteTask}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateTask}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default Task;