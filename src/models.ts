export interface User {
  url: string;
  avatar: string;
  fullName: string;
}

export interface Project {
  name: string;
  description: string;
  members: Members;
  perfomance: Perfomance;
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

export interface Perfomance {
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
