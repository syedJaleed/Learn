import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  tasks: any = {
    taskInfo: []
  };

  searchText = "";
  originalTaskInfo: any[] = [];

  editingIndex: number | null = null; // Tracks the index of the task being edited
editingTaskName: string = ''; // Temporary storage for the updated task name
  
  ngOnInit() {
    const storedTasks = localStorage.getItem('tasks');
    this.tasks.taskInfo = storedTasks ? JSON.parse(storedTasks) : [];
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default theme
  document.documentElement.setAttribute('data-theme', savedTheme);
  this.originalTaskInfo = [...this.tasks.taskInfo];
  }

  filterTasks(){
    if (this.searchText.trim() === '') {
      this.tasks.taskInfo = [...this.originalTaskInfo];
    } else {
      this.tasks.taskInfo = this.originalTaskInfo.filter((task: { taskName: string }) =>
        task.taskName.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  //   let filteredTasks = this.tasks.taskInfo.filter((name: { taskName: string; }) =>
  //     name.taskName.toLowerCase().includes(this.searchText.toLowerCase())
  // );
  // console.log(filteredTasks);
  // this.tasks.taskInfo = filteredTasks;  
  }

  changeTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);
  }
  
  addTask() {
    const taskName = this.tasks.taskName?.trim();
  
    if (taskName) {
      this.tasks.taskInfo.push({ taskName });
      localStorage.setItem('tasks', JSON.stringify(this.tasks.taskInfo));
      this.tasks.taskName = '';
    } else {
      console.error('Task name is empty. Please enter a valid task name.');
    }
    console.log(this.tasks);
    
  }

  removeTask(index: number) {
    this.tasks.taskInfo.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks.taskInfo));
  }

  updateTask(index: number, updatedTaskName: string) {
    if (updatedTaskName.trim()) {
      this.tasks.taskInfo[index].taskName = updatedTaskName;
      localStorage.setItem('tasks', JSON.stringify(this.tasks.taskInfo));
      const modal = document.getElementById(
        "my_modal_2"
      ) as HTMLDialogElement;
      if (modal) {
        modal.close();
        this.editingIndex = null; // Reset editing state
    this.editingTaskName = ''; // Clear the temporary task name
      }
    } else {
      console.error('Updated task name cannot be empty.');
    }
  }

  editTask(index: number) {
    const modal = document.getElementById(
      "my_modal_2"
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
    this.editingIndex = index; // Set the index of the task being edited
    this.editingTaskName = this.tasks.taskInfo[index].taskName; // Load the current task name
  }
  cancelEdit() {
    this.editingIndex = null; // Reset editing state
    this.editingTaskName = ''; // Clear the temporary task name
    const modal = document.getElementById(
      "my_modal_2"
    ) as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  }

}
