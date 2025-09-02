import type { User } from './models';

export interface Project {
  id: number;
  url: string;
  name: string;
  description: string;
  members: Members;
  performance: Performance;
  tasks: Task[];
  lastComment: {
    comment: string;
    time: number;
    author: User;
  } | null;
}

export interface Members {
  projectManager: User & {
    position: string;
  };
  other: User[];
}

export interface Performance {
  start: number;
  latestUpdate: number;
  deadline: number;
  progress: number;
  chart: {
    planned: number;
    ongoing: number;
    overdue: number;
  };
}

export interface Task {
  url: string;
  name: string;
  assignee: User;
  deadline: number;
}
