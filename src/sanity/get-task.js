import { client } from "./client"

function getTask(taskId) {
  return client.getDocument(taskId);
}

export {getTask}