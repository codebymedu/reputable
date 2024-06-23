import { Button } from "@reputable/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@reputable/components/tooltip/tooltip";
import { GearIcon } from "@radix-ui/react-icons";

type HeaderProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};
export const Header = ({ isSidebarOpen, toggleSidebar }: HeaderProps) => {
  return (
    <div className="gap-4 flex flex-row items-center justify-between flex-none py-2 pl-6 pr-3 text-black bg-white border-b border-neutral-200 dark:bg-black dark:text-white dark:border-neutral-800">
      <span className="font-semibold text-lg text-black">Reputable</span>

      <div>
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

        <Button>Publish</Button>
      </div>
    </div>
  );
};
