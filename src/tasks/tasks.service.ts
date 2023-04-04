import { Injectable } from "@nestjs/common";
import { Task, TaskStatus } from "./task.model";
import { v4 as uuid } from "uuid";
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getOneTasks(id): Task {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  updateOneTasks(id: string, status: TaskStatus): Task {
    const updateAbleTask = this.getOneTasks(id);
    updateAbleTask.status = status;
    return updateAbleTask;
  }

  deleteOneTasks(id): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
