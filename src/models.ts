export interface Project {
  name: string;
  description: string;
  members: Members;
  perfomance: Perfomance;
  tasks: Task[];
}

export interface Members {
  projectManager: {
    avatar: string;
    fullName: string;
    position: string;
  };
  teamAvatars: string[];
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
  name: string;
  assigneeAvatar: string;
  deadline: number;
}
