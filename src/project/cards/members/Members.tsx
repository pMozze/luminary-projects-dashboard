import type { FC } from 'react';
import type { Members } from '@/models/project.models';
import Team from './Team';

interface Props {
  projectId: number;
}

const Members: FC<Props & Members> = ({ projectId, projectManager, other: members }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-tiny text-[#b9babb]">Project manager</div>
      <a href={projectManager.url}>
        <img className="block mt-1 w-14 h-14 rounded-full" src={projectManager.avatar} alt="" />
      </a>
      <div className="mt-2 text-tiny text-[#000000]">{projectManager.fullName}</div>
      <div className="mt-1 text-tiny text-[#828B95]">{projectManager.position}</div>
      <div className="mt-4 text-tiny text-[#000000]">Project team</div>
      <Team className="mt-2" projectId={projectId} members={members} />
    </div>
  );
};

export default Members;
