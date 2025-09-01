import { useState, type FC } from 'react';
import type { User } from '@/models/models';

import { twMerge } from 'tailwind-merge';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useFloating, useInteractions, FloatingPortal, useDismiss, autoUpdate, flip, offset } from '@floating-ui/react';

import Select from './Select';
import PlusIcon from '@icons/plus.svg?react';

import type { Users, InviteUser } from '@/models/users.model';
import { apiFetcher } from '@/utils/apiFetcher';

interface Members {
  projectId: number;
  members: User[];
  className?: string;
}

const Team: FC<Members> = ({ projectId, members, className }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const { data: users, refetch: refetchUsers } = useQuery({
    queryKey: ['users', projectId],
    queryFn: () => apiFetcher<Users>(`${import.meta.env.VITE_API_URL}/usersToInviteToGroup/${projectId}`),
    select: ({ data }) => data
  });

  const mutateUsers = useMutation<unknown, Error, InviteUser>({
    mutationFn: data => apiFetcher<InviteUser, unknown>(`${import.meta.env.VITE_API_URL}/inviteUserToGroup`, data),
    onMutate: () => {
      setIsSelectOpen(false);
    },
    onSuccess: () => {
      refetchUsers();
    }
  });

  const { refs, floatingStyles, context } = useFloating({
    open: isSelectOpen,
    onOpenChange: setIsSelectOpen,
    whileElementsMounted: autoUpdate,
    middleware: [flip(), offset(10)]
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([useDismiss(context, { ancestorScroll: true })]);

  const onSelect = (users: Users) => {
    mutateUsers.mutate({ groupId: projectId, userId: users[0].id });
  };

  return (
    <div
      ref={refs.setPositionReference}
      className={twMerge(className, 'flex items-center gap-1')}
      {...getReferenceProps()}
    >
      <div className="p-1 border-1 border-[#A2A7AE] rounded-full flex items-center gap-0.5">
        {members.slice(0, 3).map((member, memeberIndex) => (
          <a key={memeberIndex} href={member.url} title={member.fullName}>
            <img className="block w-4 h-4 rounded-full" src={member.avatar} alt="" />
          </a>
        ))}
        {members.length > 3 && <div className="text-tiny text-[#A2A7AE]">+{members.length - 3}</div>}
      </div>
      {users && (
        <>
          <button
            ref={refs.setReference}
            className="p-0 w-5 h-5 rounded-full bg-transparent border-1 text-[#2FC6F6] border-[currentColor] flex justify-center items-center cursor-pointer"
            type="button"
            onClick={() => setIsSelectOpen(true)}
          >
            <PlusIcon />
          </button>
          {isSelectOpen && (
            <FloatingPortal id="projects-dashboard">
              <Select
                items={users}
                onSelect={onSelect}
                floating={{ set: refs.setFloating, styles: floatingStyles, getProps: getFloatingProps }}
              />
            </FloatingPortal>
          )}
        </>
      )}
    </div>
  );
};

export default Team;
