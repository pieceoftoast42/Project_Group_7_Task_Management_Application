import React from "react";
import {getUserA, getDashboard} from "./taskAnalytics.js";
import TaskList from "./TaskList";
import "./styles/Dashboard.css";

function Dashboard ({tasks})
{
    const currentUser = "test";
    const stats = getDashboard(tasks);
    const userStats = getUserA(tasks);

    return (
    <div style={{padding: "20px", backgroundColor:"#d8d8d8dc", borderRadius:"20px"}}>
      <h1>Dashboard</h1>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <StatCard label="Total Tasks" value={stats.total} color="#4A90E2" />
        <StatCard label="Completed" value={stats.completed} color="#50C878" />
        <StatCard label="Overdue" value={stats.overdue} color="#E94E4E" />
      </div>
      <div style={{ marginTop: "40px" }}>
        <h2>Upcoming Deadlines</h2>
        {stats.upcoming.length === 0 ? 
        (
          <p>No upcoming tasks 🎉</p>
        ) : (
          <ul>
            {stats.upcoming.map(task => (
              <li key={task.id}>
                <strong>{task.title}</strong> — due{" "}
                {new Date(task.dueDate).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div style={{ marginTop: "40px" }}>
        <h2>User Analytics</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px"
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>User</th>
              <th style={thStyle}>Owned Tasks</th>
              <th style={thStyle}>Collaborated Tasks</th>
              <th style={thStyle}>Completed</th>
              <th style={thStyle}>Overdue</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(userStats).map(([user, stats]) => (
              <tr key={user}>
                <td style={tdStyle}>{user}</td>
                <td style={tdStyle}>{stats.owned}</td>
                <td style={tdStyle}>{stats.collaborated}</td>
                <td style={tdStyle}>{stats.completed}</td>
                <td style={tdStyle}>{stats.overdue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    <div style={{ marginTop: "40px" }}>
    <TaskList tasks={tasks} saveTasks={(updated) => 
    {
        localStorage.setItem("tasks", JSON.stringify(updated));
    }} 
    />
    </div>
    </div>
);
}


const thStyle = 
{
  borderBottom: "1px solid #ccc",
  textAlign: "left",
  padding: "8px"
};

const tdStyle = {
  borderBottom: "1px solid #eee",
  padding: "8px"
};


function StatCard({ label, value, color }) 
{
  return (
    <div
      style=
      {{
        flex: 1,
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: color,
        color: "white",
        textAlign: "center"
      }}
    >
      <h3>{label}</h3>
      <p style={{fontSize:"24px", margin:0}}>{value}</p>
    </div>
  );
}

export default Dashboard;