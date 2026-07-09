// modules/storage.js

const API_URL = "http://localhost:5000/api/tasks";

// Get all tasks
export async function loadTasks() {
    const response = await fetch(API_URL);
    return await response.json();
}

// Add task
export async function saveTask(task) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });

    return await response.json();
}

// Update task
export async function updateTask(id, task) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });

    return await response.json();
}

// Delete task
export async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
}

// Theme
export function saveTheme(theme) {
    localStorage.setItem("theme", theme);
}

export function loadTheme() {
    return localStorage.getItem("theme") || "light";
}