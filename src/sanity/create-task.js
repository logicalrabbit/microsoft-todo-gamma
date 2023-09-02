import { client } from './client';

function normalize({
  userId,
  title,
  note = null,
  dueDate = null,
  completedAt = null,
  list,
  important = false,
  myDay = false,
}) {
  return {
    _type: 'task',
    userId,
    title,
    note,
    dueDate,
    completedAt,
    list,
    important,
    myDay,
  };
}

function createTask(_task) {
  const task = normalize(_task);
  return client.create(task, {visibility: 'sync'});
}

export { createTask };
