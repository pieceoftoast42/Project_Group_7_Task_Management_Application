export function getDashboard(tasks)
{
    const now = new Date();
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const overdue = tasks.filter(t => !t.completed && new Date(t.dueDate) < now).length;

    const upcoming = tasks.filter(t => !t.completed && new Date(t.dueDate) >= now)
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 5);

  return {total, completed, overdue, upcoming};
}

export function getUserA(tasks)
{
    const now = new Date();
    const userStats = {};

    const addUser = (user, isOwner) => 
    {
    if (!userStats[user]) 
    {
      userStats[user] = 
      {
        owned: 0,
        collaborated: 0,
        completed: 0,
        overdue: 0,
        totalTasks: 0
      };
    }

    if (isOwner) userStats[user].owned++;
    else userStats[user].collaborated++;

    userStats[user].totalInvolved++;
  };

  tasks.forEach(task => 
    {
    const owner = task.owner || "Unknown";
    const collaborators = task.assignedTo || []; // use assignedTo from TaskForm

    // Add owner
    addUser(owner, true);

    // Add collaborators safely
    collaborators.forEach(c => addUser(c, false));

    [owner, ...collaborators].forEach(u => 
    {
      if (!u) return;

      if (task.completed) userStats[u].completed++;
      if (!task.completed && new Date(task.dueDate) < now) userStats[u].overdue++;
    });
  });

  return userStats;
}

