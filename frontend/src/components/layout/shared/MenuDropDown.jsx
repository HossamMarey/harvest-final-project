import { Button } from "@/components/ui/button";
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
} from "@/components/ui/dropdown-menu";
import { IoMenuSharp } from "react-icons/io5";
import NavMenu from "./NavMenu";

function MenuDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="lg:hidden bg-foreground">
          <IoMenuSharp size={26} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <NavMenu />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MenuDropDown;
