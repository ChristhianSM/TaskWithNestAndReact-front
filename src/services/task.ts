const API = 'http://localhost:3000';

interface Task {
  title: string;
  description?: string;
  done?: boolean;
}

export const createTaskRequest = async (task: Task) => {
  const resp = await fetch(`${API}/task`, {
    method: 'POST',
    body: JSON.stringify(task),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await resp.json();
  return data
}