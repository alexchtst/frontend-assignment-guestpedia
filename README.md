# FRONTEND ASSIGNMENT GUESTPEDIA `[TEST#2]`

## Contributor
Alex Cinatra Hutasoit as a intern applier for Frontend Developer in Guestpedia.

## HOW TO USE
Clone Repository
```bash
git clone https://github.com/alexchtst/frontend-assignment-guestpedia.git
```

Change Directory
```bash
cd frontend-assignment-guestpedia
```

Install All Modules
```bash
npm install
```

Start The Projects
```bash
npm run dev
```

After that your bash will be running like this:
```bash
> frontend-assignment-guestpedia@0.1.0 dev
> next dev --turbopack

   ▲ Next.js 15.3.5 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://your-ip:3000

 ✓ Starting...
 ✓ Ready in 2.9s
 ○ Compiling / ...
 ✓ Compiled / in 4.1s
 GET / 200 in 4679ms
```
so you can access in your local computer in http://localhost:3000 or in http://your-ip:3000

This Project also Provided in this link: 
```bash
https://frontend-assignment-guestpedia.vercel.app/
```

## Objective
- Build a **task management application**, with the ability to **create**, **edit**, **delete**
tasks and track progress.

- The recommended technology stack includes **NextJS**, **Typescript**, and
**TailwindCSS**.

- Please complete this task within 7 days.

## Requirements
`General functionality:`
- **Create task**: The user should be able to create a new task, consisting
of ID (auto generate), title, description, progress, and priority. A
newly created task should have “Medium” priority by default. **`[GF.1]`**
- **Edit task**: The user should be able to edit task title, description, and
priority. Please note that the ID is not editable. **`[GF.2]`**
- **Delete task**: The user should be able to delete a task. **`[GF.3]`**

`User Interface:`
- Focus on desktop view **(minimum screen width 1024px)**. **`[UI.1]`**
- **Drag-and-Drop**: Implement drag-and-drop functionality for changing
the task’s progress **(example: moving tasks from "To Do" to "In
Progress" or "Done")**. **`[UI.2]`**

`State Management:`
- Use a **state management library** to handle task data. **`[SM.1]`**
- Implement a storage solution to **persist data** between page reloads.
There is no need to implement an API or database, a browser storage
should be enough. **`[SM.2]`**

## Development Planning
Objective checklist

| Tech Requirements | DONE/UNDONE   | REASON    |
| :---------------- | :------:      |:------:   |
| NextJs            | `DONE`        |OBJECTIVE  |
| TypeScript        | `DONE`        |OBJECTIVE  |
| Tailwindcss       | `DONE`        |OBJECTIVE  |

### Reasoning 1
In this project we are going to create a CRUD app with drag-and-drop implementation of changing task progress. There is no api needed in this case, so we are going to store data in local storage to preserved presist data when the page is reload and page refreshed. 

For the state management i'm using the use context so each component can handle the same data context and make it easy to develop.

In this case i'm using `DnD-Kit` to implement the drag and drop task through the progress canvas. So the **dragable** will be the task component and the **dropable/dropzone** will be the progress container.

Each task have id (auto generate), title, description, progress, and priority then the task data should be like this:
```json
{
    "id": "SM-12",
    "title": "Cillum ullamco cillum aliqua.",
    "description": "Fugiat excepteur labore reprehenderit laborum.",
    "progress": "TODO",
    "priority": "medium"
}
```
where the progress is enum of this : `["TODO, IN PROGRESS", "DONE"]`. While the priority is enum of this : `["HIGH", "MEDIUM", "LOW"]` this reasoning is also satisfy the **`[SM.1]`** **`[SM.2]`** **`[UI.1]`**.

To Implement the CRUD i need a function to do so, it's for create task **[storeData]**, edit data (by id becase id is not editable) `[GF.2]` with **editData** and id is used for delete data too in **deleteData**.

### Reasoning 2
The Task is not complately done because user can see the task details, so i'm decided to make a page that corespond to specific task. The page is placed in `/taskId` for example `/SM-12`, this page is showing the details of the task. In this page there are back button to back to the main activity such as CRUD actifities and progress task change activity.

### Reasoning 3
After create, edit and delete there is no notification to tell the user that the action is success or fail. So i decided to create general toaster as a notification.

### Development Progress
General Functionality checklist
| Requirements | DONE/UNDONE   | REASON    |
| :---------------- | :------:      |:------:   |
| Task Interface | `DONE` |Reasoning 1|
| Progress and Priority Enum | `DONE` |Reasoning 1|
| Task Context | `DONE` |SM.1|
| TaskID Generator | `DONE` |GF.1|
| Task Component & Progress Component | `DONE` |GF.1|
| Create Task | `DONE` |GF.1|
| Edit Task | `DONE` |GF.2|
| Change Priority | `DONE` |UI.2|
| Delete Task | `DONE` |GF.3|
| Create TaskDetails Component | `DONE` |Reasoning 2|
| Create Dynamic Page Route | `DONE` |Reasoning 2|
| Create Toaster Component |  |Reasoning 3|
| Implement Toaster |  |Reasoning 3|