import { Button } from "@reputable/components/button/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@reputable/components/tooltip/tooltip";
import { GearIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@reputable/components/dropdown/dropdown";

type HeaderProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};
export const Header = ({ isSidebarOpen, toggleSidebar }: HeaderProps) => {
  return (
    <div className=" flex flex-row items-center justify-end flex-none py-2 pl-6 pr-3 text-black bg-white border-b border-neutral-200 dark:bg-black dark:text-white dark:border-neutral-800">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={toggleSidebar} variant="ghost">
            <GearIcon name={isSidebarOpen ? "PanelLeftClose" : "PanelLeft"} />
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          <p>Settings</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};
