import { type FC, type CSSProperties, useState, useEffect, useRef } from 'react';

import type { User } from '@/models/models';
import type { Users } from '@/models/users.model';

import PlusIcon from '@icons/plus.svg?react';
import CheckIcon from '@icons/check.svg?react';

type Item = User & { id: number; isSelected?: boolean };

interface Props {
  items: Item[];
  onSelect: (users: Users) => void;
  floating: {
    set: (node: HTMLElement | null) => void;
    styles: CSSProperties;
    getProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
  };
}

const Select: FC<Props> = ({ items: initialItems, onSelect, floating }) => {
  const itemRef = useRef<HTMLButtonElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Item[]>(initialItems);

  useEffect(() => {
    if (!itemRef.current || !itemsContainerRef.current) {
      return;
    }

    itemsContainerRef.current.style.maxHeight = `calc(var(--spacing) * 2.5 + ${itemRef.current.getBoundingClientRect().height * 8}px)`;
  }, []);

  const toggleItemActive = (item: Item) => {
    setItems(items.map(newItem => (newItem.id === item.id ? { ...newItem, isSelected: !item.isSelected } : newItem)));
  };

  const onSubmit = () => {
    const selectedUsers = items.filter(item => item.isSelected);

    if (selectedUsers.length) {
      onSelect(selectedUsers);
    }
  };

  return (
    <div
      ref={floating.set}
      className="bg-[#ffffff] shadow-lg rounded-2xl"
      style={floating.styles}
      {...floating.getProps()}
    >
      <div className="flex flex-col gap-2.5">
        <div ref={itemsContainerRef} className="p-2.5 pb-0 flex flex-col overflow-y-auto">
          {items.map((item, itemIndex) => (
            <button
              ref={itemRef}
              key={itemIndex}
              className="p-0 py-2 pl-2.5 flex gap-2.5 items-stretch bg-transparent border-0 font-[inherit] text-start whitespace-nowrap text-sm text-[#535c69] rounded-sm cursor-pointer hover:bg-[#f7f8f8] data-[active=true]:bg-[#e0f6fe] hover:data-[active=true]:bg-[#c8f0fd]"
              type="button"
              data-active={item.isSelected}
              onClick={() => toggleItemActive(item)}
            >
              <img className="shrink-0 w-7 h-7 object-cover rounded-full" src={item.avatar} alt="" />
              <div className="content-center mr-5">{item.fullName}</div>
              <div
                className="mr-2.5 flex ml-auto text-[#0DB1E6]"
                style={!item.isSelected ? { visibility: 'hidden' } : undefined}
              >
                <CheckIcon className="my-auto" />
              </div>
            </button>
          ))}
        </div>
        <button
          className="flex items-center gap-2 py-5 px-5 bg-[#eaf9fe] font-[inherit] text-start border-0 rounded-bl-sm rounded-br-sm cursor-pointer"
          type="button"
        >
          <div className="flex w-6 h-6 rounded-full bg-[#0DB1E6] text-[#ffffff]">
            <PlusIcon className="m-auto" width={12} height={12} />
          </div>
          <div
            className="text-sm text-[#525c69] hover:text-[#333333] hover:border-[rgba(82,92,105,.8)] border-0 border-b-[1px] border-dashed border-[rgba(82,92,105,.27)]"
            onClick={onSubmit}
          >
            Invite a user
          </div>
        </button>
      </div>
    </div>
  );
};

export default Select;
