import { client } from './client';

const query = '*[_type == "task" && userId == $userId && dueDate != null]{..., list->}';

function getPlannedTasks({ userId }) {
  const params = { userId };
  return client.fetch(query, params);
}

export { getPlannedTasks };
