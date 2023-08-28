import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3000' });

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response?.data || error)
);

const getDataFromResponse = (response) => response.data;

function createTask(task) {
  return api.post('/tasks', task).then(getDataFromResponse);
}

function patchTask(taskId, updates) {
  return api.patch(`/tasks/${taskId}`, updates).then(getDataFromResponse);
}

function deleteTask(taskId) {
  return api.delete(`/tasks/${taskId}`).then(getDataFromResponse);
}

function getTasks() {
  return api.get('/tasks').then(getDataFromResponse);
}

function getTask(taskId) {
  return api.get(`/tasks/${taskId}`).then(getDataFromResponse);
}

export { createTask, patchTask, deleteTask, getTasks, getTask };
