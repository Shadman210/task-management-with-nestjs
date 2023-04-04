import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Task, TaskStatus } from "./task.model";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller("tasks")
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get("/:id")
  getOneTasks(@Param("id") id: string): Task {
    return this.taskService.getOneTasks(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }

  @Patch("/:id/status")
  updateOneTasks(
    @Param("id") id: string,
    @Body("status") status: TaskStatus
  ): Task {
    return this.taskService.updateOneTasks(id, status);
  }

  @Delete("/:id")
  deleteOneTasks(@Param("id") id: string): void {
    this.taskService.deleteOneTasks(id);
  }
}
