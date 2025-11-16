import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import './styles/general.css';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => 
  {
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  setTasks(saved);
  }, []);

  const saveTasks = (updated) => 
  {
  setTasks(updated);
  localStorage.setItem("tasks", JSON.stringify(updated));
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
          <div
            style={{
              background: "#1e1e1e",
              color: "white",
              width: isOpen ? "200px" : "60px",
              overflow: "hidden",
              paddingTop: "20px"
            }}
          >
            <button
              style={{
                width: "100%",
                background: "#333",
                color: "white",
                border: "none",
                padding: "10px",
                cursor: "pointer"
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "←" : "→"}
            </button>

            <div style={{ padding: "10px" }}>
              {isOpen && (
                <>
                  <a href="#" style={{ display: "block", color: "white", margin: "10px 0" }}>PLACE FOR INFO IN SIDEBAR</a>
                </>
              )}
            </div>
          </div>
          <div style={{ flexGrow: 1, padding: "20px" }}>
            <h1>PinTask</h1>
              <TaskForm tasks={tasks} saveTasks={saveTasks} />
              <TaskList tasks={tasks} saveTasks={saveTasks} />
          </div>
        </div>
  );
  
}

export default App;
