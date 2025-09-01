import type { FC } from 'react';

import Card from './ui/Card';
import Members from './cards/Members';
import Perfomance from './cards/Perfomance';
import Tasks from './cards/Tasks';
import Comment from './Comment';

import type { Project as ProjectData } from '@/models';

const Project: FC<ProjectData> = ({ name, description, members, perfomance, tasks, lastComment }) => {
  return (
    <div className="flex flex-col p-8 max-md:p-4 bg-[#F5F4F7] rounded-4xl max-md:rounded-2xl">
      <div className="text-2xl font-semibold text-[#4A4A4A]">Project: {name}</div>
      <div className="card p-4 mt-4">
        <div className="font-semibold text-[#545454]">Summary of the project</div>
        <div className="text-sm text-[#4A4A4A] mt-2">{description}</div>
      </div>
      <div className="mt-9 max-md:mt-4 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
        <Card title="Project members">
          <Members {...members} />
        </Card>
        <Card title="Project perfomance">
          <Perfomance {...perfomance} />
        </Card>
        <Card title="Project tasks">
          <Tasks tasks={tasks} />
        </Card>
      </div>
      {lastComment && (
        <Comment className="mt-4" text={lastComment.comment} createdOn={lastComment.time} author={lastComment.author} />
      )}
    </div>
  );
};

export default Project;
