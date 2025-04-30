// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.scss'
// })
// export class HomeComponent {

//   tasks: any = {
//     taskInfo: []
//   };

//   searchText = "";
//   originalTaskInfo: any[] = [];

//   editingIndex: number | null = null; // Tracks the index of the task being edited
// editingTaskName: string = ''; // Temporary storage for the updated task name
  
//   ngOnInit() {
//     const storedTasks = localStorage.getItem('tasks');
//     this.tasks.taskInfo = storedTasks ? JSON.parse(storedTasks) : [];
//     const savedTheme = localStorage.getItem('theme') || 'light'; // Default theme
//   document.documentElement.setAttribute('data-theme', savedTheme);
//   this.originalTaskInfo = [...this.tasks.taskInfo];
//   }

//   filterTasks(){
//     if (this.searchText.trim() === '') {
//       this.tasks.taskInfo = [...this.originalTaskInfo];
//     } else {
//       this.tasks.taskInfo = this.originalTaskInfo.filter((task: { taskName: string }) =>
//         task.taskName.toLowerCase().includes(this.searchText.toLowerCase())
//       );
//     }
//   //   let filteredTasks = this.tasks.taskInfo.filter((name: { taskName: string; }) =>
//   //     name.taskName.toLowerCase().includes(this.searchText.toLowerCase())
//   // );
//   // console.log(filteredTasks);
//   // this.tasks.taskInfo = filteredTasks;  
//   }

//   changeTheme(theme: string) {
//     document.documentElement.setAttribute('data-theme', theme);

//     localStorage.setItem('theme', theme);
//   }
  
//   addTask() {
//     const taskName = this.tasks.taskName?.trim();
//     let ceratedDate = new Date();
//     console.log(ceratedDate);
    
  
//     if (taskName) {
//       this.tasks.taskInfo.push({ taskName, ceratedDate });
//       localStorage.setItem('tasks', JSON.stringify(this.tasks.taskInfo));
//       this.tasks.taskName = '';
//     } else {
//       console.error('Task name is empty. Please enter a valid task name.');
//     }
//     console.log(this.tasks);
    
//   }

//   removeTask(index: number) {
//     this.tasks.taskInfo.splice(index, 1);
//     localStorage.setItem('tasks', JSON.stringify(this.tasks.taskInfo));
//   }

//   updateTask(index: number, updatedTaskName: string) {
//     if (updatedTaskName.trim()) {
//       this.tasks.taskInfo[index].taskName = updatedTaskName;
//       localStorage.setItem('tasks', JSON.stringify(this.tasks.taskInfo));
//       const modal = document.getElementById(
//         "my_modal_2"
//       ) as HTMLDialogElement;
//       if (modal) {
//         modal.close();
//         this.editingIndex = null; // Reset editing state
//     this.editingTaskName = ''; // Clear the temporary task name
//       }
//     } else {
//       console.error('Updated task name cannot be empty.');
//     }
//   }

//   editTask(index: number) {
//     const modal = document.getElementById(
//       "my_modal_2"
//     ) as HTMLDialogElement;
//     if (modal) {
//       modal.showModal();
//     }
//     this.editingIndex = index; // Set the index of the task being edited
//     this.editingTaskName = this.tasks.taskInfo[index].taskName; // Load the current task name
//   }
//   cancelEdit() {
//     this.editingIndex = null; // Reset editing state
//     this.editingTaskName = ''; // Clear the temporary task name
//     const modal = document.getElementById(
//       "my_modal_2"
//     ) as HTMLDialogElement;
//     if (modal) {
//       modal.close();
//     }
//   }

// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tasks: any = {
    taskInfo: [] // Main list of tasks
  };

  searchText: string = '';
  originalTaskInfo: any[] = []; // Backup of the original task list
  editingIndex: number | null = null; // Tracks the index of the task being edited
  editingTaskName: string = ''; // Temporary storage for the updated task name

  constructor(private router: Router){

  }

  ngOnInit() {
    // Load tasks from localStorage
    const storedTasks = localStorage.getItem('tasks');
    this.tasks.taskInfo = storedTasks ? JSON.parse(storedTasks) : [];
    this.originalTaskInfo = [...this.tasks.taskInfo];

    // Set theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  filterTasks() {
    if (this.searchText.trim() === '') {
      // Reset to original tasks if search is empty
      this.tasks.taskInfo = [...this.originalTaskInfo];
    } else {
      // Filter tasks by search text
      this.tasks.taskInfo = this.originalTaskInfo.filter((task: { taskName: string }) =>
        task.taskName.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  changeTheme(theme: string) {
    // Change theme dynamically and save to localStorage
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  addTask() {
    const taskName = this.tasks.taskName?.trim();
    const createdDate = new Date().toLocaleString();

    if (taskName) {
      // Ensure unique task names
      if (this.originalTaskInfo.some(task => task.taskName === taskName)) {
        console.error('Task name already exists.');
        return;
      }

      // Add task with name and creation date
      const newTask = { taskName, createdDate };
      this.tasks.taskInfo.push(newTask);
      this.originalTaskInfo.push(newTask);

      // Save updated tasks to localStorage
      localStorage.setItem('tasks', JSON.stringify(this.tasks.taskInfo));

      // Clear input field
      this.tasks.taskName = '';
    } else {
      console.error('Task name is empty. Please enter a valid task name.');
    }
  }

  goToValidation(){
    this.router.navigate(["validations"])
  }

  removeTask(index: number) {
    // Remove task from both lists
    const removedTask = this.tasks.taskInfo[index];
    this.tasks.taskInfo.splice(index, 1);
    this.originalTaskInfo = this.originalTaskInfo.filter(task => task !== removedTask);

    // Update localStorage
    localStorage.setItem('tasks', JSON.stringify(this.tasks.taskInfo));
  }

  editTask(index: number) {
    this.editingIndex = index; // Set the task being edited
    this.editingTaskName = this.tasks.taskInfo[index].taskName; // Load current task name

    // Show the modal
    const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }

  updateTask(index: number, updatedTaskName: string) {
    if (updatedTaskName.trim()) {
      // Update task name in both lists
      this.tasks.taskInfo[index].taskName = updatedTaskName;
      this.originalTaskInfo[index].taskName = updatedTaskName;

      // Save updated tasks to localStorage
      localStorage.setItem('tasks', JSON.stringify(this.tasks.taskInfo));

      // Close the modal
      this.cancelEdit();
    } else {
      console.error('Updated task name cannot be empty.');
    }
  }

  cancelEdit() {
    this.editingIndex = null; // Reset editing state
    this.editingTaskName = ''; // Clear temporary task name

    // Close the modal
    const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  }
}

