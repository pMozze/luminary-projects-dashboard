import type { FC } from 'react';
import { useQuery } from '@tanstack/react-query';

import type { Project as ProjectData } from './models/project.models';
import Project from './project/Project';

import { apiFetcher } from './utils/apiFetcher';

const App: FC = () => {
  const { data: projects } = useQuery({
    queryKey: ['projects'],
    queryFn: () => apiFetcher<ProjectData[]>(`${import.meta.env.VITE_API_URL}/92`),
    refetchInterval: 5000,
    select: ({ data }) => data
  });

  if (!projects) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-8">
      {projects.map((project, projectIndex) => (
        <Project
          key={projectIndex}
          id={project.id}
          name={project.name}
          description={project.description}
          members={project.members}
          performance={project.performance}
          tasks={project.tasks}
          lastComment={project.lastComment}
        />
      ))}
    </div>
  );
};

export default App;
