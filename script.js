document.addEventListener('DOMContentLoaded', function () {
    // Load existing users from local storage
    loadUsers();

    

    // Function to add a new user
    window.addUser = function () {
        const usernameInput = document.getElementById('username');
        const roleSelect = document.getElementById('role');

        const username = usernameInput.value;
        const role = roleSelect.value;

        if (username && role) {
            // Create user object
            const user = { username, role };

            // Add user to the list
            addUserToList(user);

            // Clear input fields
            usernameInput.value = '';
            roleSelect.value = '';

            // Save users to local storage
            saveUsers();
        } else {
            alert('Please enter username and select a role.');
        }
    };

    // Function to load users from local storage
    function loadUsers() {
        const userList = document.getElementById('user-list');
        userList.innerHTML = '';

        const users = JSON.parse(localStorage.getItem('users')) || [];

        users.forEach(user => {
            addUserToList(user);
        });
    }

    // Function to add a user to the list
    function addUserToList(user) {
        const userList = document.getElementById('user-list');

        const li = document.createElement('li');
        li.innerHTML = `<strong>${user.username}</strong> - ${user.role}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            deleteUser(user);
        };

        li.appendChild(deleteButton);
        userList.appendChild(li);
    }

    // Function to delete a user
    function deleteUser(user) {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Filter out the user to be deleted
        const updatedUsers = users.filter(u => u.username !== user.username);

        // Save updated users to local storage
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        // Reload users
        loadUsers();
    }

    // Function to save users to local storage
    function saveUsers() {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Save new user to the list
        const user = { username: users.length + 1, role: role };
        users.push(user);

        // Save updated users to local storage
        localStorage.setItem('users', JSON.stringify(users));

        // Reload users
        loadUsers();
    }

    // Function to add a new task
    window.addTask = function () {
        const taskNameInput = document.getElementById('task-name');
        const projectSelect = document.getElementById('project');
        const assigneeSelect = document.getElementById('assignee');
        const prioritySelect = document.getElementById('priority');
        const dependenciesInput = document.getElementById('dependencies');

        const taskName = taskNameInput.value;
        const project = projectSelect.value;
        const assignee = assigneeSelect.value;
        const priority = prioritySelect.value;
        const dependencies = dependenciesInput.value.split(',').map(dep => dep.trim());

        if (taskName && project && assignee && priority) {
            // Create task object
            const task = { taskName, project, assignee, priority, dependencies };

            // Add task to the list
            addTaskToList(task);

            // Clear input fields
            taskNameInput.value = '';
            dependenciesInput.value = '';

            // Save tasks to local storage
            saveTasks();
        } else {
            alert('Please fill in all required fields.');
        }
    };

    // Function to add a new client
    window.addClient = function () {
        const clientNameInput = document.getElementById('client-name');

        const clientName = clientNameInput.value;

        if (clientName) {
            // Create client object
            const client = { clientName };

            // Add client to the list
            addClientToList(client);

            // Clear input field
            clientNameInput.value = '';

            // Save clients to local storage
            saveClients();
        } else {
            alert('Please enter client name.');
        }
    };

    // Function to add a new project
    window.addProject = function () {
        const projectNameInput = document.getElementById('project-name');
        const clientSelect = document.getElementById('client');
        const projectManagerSelect = document.getElementById('project-manager');

        const projectName = projectNameInput.value;
        const client = clientSelect.value;
        const projectManager = projectManagerSelect.value;

        if (projectName && client && projectManager) {
            // Create project object
            const project = { projectName, client, projectManager };

            // Add project to the list
            addProjectToList(project);

            // Clear input fields
            projectNameInput.value = '';
            clientSelect.value = '';
            projectManagerSelect.value = '';

            // Save projects to local storage
            saveProjects();
        } else {
            alert('Please enter project name, select a client, and select a project manager.');
        }
    };

    // Function to add a new task
    window.addTask = function () {
        const taskNameInput = document.getElementById('task-name');
        const projectSelect = document.getElementById('project');
        const assigneeSelect = document.getElementById('assignee');
        const prioritySelect = document.getElementById('priority');
        const dependenciesInput = document.getElementById('dependencies');
        const deadlineInput = document.getElementById('deadline');
        const taskList = document.getElementById('task-list');

        const taskName = taskNameInput.value;
        const project = projectSelect.value;  // Ensure project name is obtained from the correct input field
        const assignee = assigneeSelect.value;
        const priority = prioritySelect.value;
        const dependencies = dependenciesInput.value.split(',').map(dep => dep.trim());
        const deadline = deadlineInput.value;

        if (taskName && project && assignee && priority && deadline) {
            // Create task object
            const task = { taskName, project, assignee, priority, dependencies, deadline };

            // Create a list item to display the task
            const listItem = document.createElement('li');
            listItem.textContent = `Task: ${taskName}, Project: ${project}, Assignee: ${assignee}, Priority: ${priority}, Deadline: ${deadline}`;

            // Add the list item to the task list
            taskList.appendChild(listItem);

            // Clear input fields
            taskNameInput.value = '';
            dependenciesInput.value = '';
            deadlineInput.value = '';
        } else {
            alert('Please fill in all required fields.');
        }
    };
});
