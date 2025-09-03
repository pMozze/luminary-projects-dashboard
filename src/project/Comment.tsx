import type { FC } from 'react';
import type { User } from '@/models/models';

import { formatDate, fromUnixTime } from 'date-fns';
import { twMerge } from 'tailwind-merge';

interface Props {
  text: string;
  createdOn: number;
  author: User;
  className?: string;
}

const Comment: FC<Props> = ({ className, text, createdOn, author }) => {
  return (
    <div className={twMerge(className, 'flex gap-2')}>
      <a className="shrink-0" href={author.url}>
        <img className="block w-10 h-10 rounded-full" src={author.avatar} alt="" />
      </a>
      <div className="py-2.5 px-4 w-full bg-[#ffffff] rounded-[30px]">
        <div className="flex gap-1.5">
          <a className="text-sm text-[#1F67AF] font-medium no-underline" href={author.url}>
            {author.fullName}
          </a>
          <div className="text-sm text-[#868686] font-medium">{formatDate(fromUnixTime(createdOn), 'd MMMM H:mm')}</div>
        </div>
        <div className="text-sm">{text}</div>
      </div>
    </div>
  );
};

export default Comment;
