import { client } from './client';

const query = '*[_type == "task" && userId == $userId && myDay == true]{..., list->}';

function getDayTasks({ userId }) {
  const params = { userId };
  return client.fetch(query, params);
}

export { getDayTasks };
