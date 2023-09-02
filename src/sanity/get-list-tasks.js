import { client } from './client';

const query = '*[_type == "task" && userId == $userId && list == $list]{..., list->}';

function getListTasks({ userId, list = null }) {
  const params = { userId, list };
  return client.fetch(query, params);
}

export { getListTasks };
