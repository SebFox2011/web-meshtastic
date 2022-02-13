import React from 'react';

import { useAppSelector } from '@app/hooks/useAppSelector';

import { ButtonNav } from './ButtonNav';
import { Settings } from './Settings/Index';

export interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar = ({ children }: SidebarProps): JSX.Element => {
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const appState = useAppSelector((state) => state.app);

  return (
    <div
      className={`absolute z-20 h-full w-full flex-grow flex-col md:relative md:flex md:w-96 ${
        appState.mobileNavOpen ? 'flex' : 'hidden'
      }`}
    >
      <div className="flex h-full w-full flex-col shadow-xl dark:bg-primaryDark">
        <div className="relative flex-grow gap-1">
          <div className="absolute h-full w-full">{children}</div>
          <Settings open={settingsOpen} setOpen={setSettingsOpen} />
        </div>
        <ButtonNav
          toggleSettingsOpen={(): void => {
            setSettingsOpen(!settingsOpen);
          }}
        />
      </div>
    </div>
  );
};