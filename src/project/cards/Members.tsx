import type { FC } from 'react';
import type { Members } from '@/models';

const Members: FC<Members> = ({ projectManager, teamAvatars }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-tiny text-[#828B95]">Project manager</div>
      <img className="mt-1 w-14 h-14 rounded-full" src={projectManager.avatar} alt="" />
      <div className="mt-2 text-tiny text-[#000000]">{projectManager.fullName}</div>
      <div className="mt-1 text-tiny text-[#828B95]">{projectManager.position}</div>
      <div className="mt-4 text-tiny text-[#000000]">Project team</div>
      <div className="mt-2 flex items-center gap-1">
        <div className="p-1 border-1 border-[#A2A7AE] rounded-full flex items-center gap-0.5">
          {teamAvatars.slice(0, 3).map((avatar, avatarIndex) => (
            <img key={avatarIndex} className="w-4 h-4 rounded-full" src={avatar} alt="" />
          ))}
          {teamAvatars.length > 3 && <div className="text-tiny text-[#A2A7AE]">+{teamAvatars.length - 3}</div>}
        </div>
        <div className="w-5 h-5 rounded-full border-1 border-[#2FC6F6] flex justify-center items-center">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 0.5V7.5M0.5 4H7.5" stroke="#2FC6F6" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Members;
