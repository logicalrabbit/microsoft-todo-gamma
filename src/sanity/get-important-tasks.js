import { client } from './client';

const query = '*[_type == "task" && userId == $userId && important == true]{..., list->}';

function getImportantTasks({ userId }) {
  const params = { userId };
  return client.fetch(query, params);
}

export { getImportantTasks };
