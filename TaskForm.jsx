import React, {useState} from "react";
import './styles/TaskCard.css';
function TaskForm({tasks, saveTasks})
{
    const[title, setTitle] = useState("");
    const[desc, setDesc] = useState("");
    const[due, setDue] = useState("");
    const[priority, setPriority] = useState("Low");
    const[collab, setCollab] = useState([""]);

    const addCollaborator = () => setCollab([...collab, ""]);
    const updateCollaborator = (i,val) => 
    {
        const updated = [...collab];
        updated[i] = val;
        setCollab(updated);
    };
    const removeCollaborator = (i) => 
    {
        setCollab(collab.filter((_, idx) => idx !== i));
    };

    const createTask = (e) =>
    {
        e.preventDefault();
        const newTask = 
        {
            id: crypto.randomUUID(),
            title,
            description: desc,
            dueDate:due,
            priority, 
            assignedTo: collab.filter((c) => c.trim() !==""),
            status:"open",
        };

        saveTasks([...tasks, newTask]);
        setTitle("");
        setDesc("");
        setDue("");
        setPriority("Low");
        setCollab([""]);
    };

    return(
    <div style={{ marginBottom: "40px" }}>
      <h2>Create New Task</h2>
      <form onSubmit={createTask}>
        <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        /><br /><br />
        <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        ></textarea><br /><br />

        <input
        type="date"
        value={due}
        onChange={(e) => setDue(e.target.value)}
        /><br /><br />

        <label>Priority: </label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
        </select>

        <h3>Collaborators</h3>

        {collab.map((c, index) => (
          <div key={index}>
            <input
            type="text"
            placeholder="Collaborator email"
            value={c}
            onChange={(e) => updateCollaborator(index, e.target.value)}
            />
            {index > 0 && (
              <button type="button" onClick={() => removeCollaborator(index)}>
            Remove
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={addCollaborator}>
          + Add Collaborator
        </button>

        <br /><br />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default TaskForm;