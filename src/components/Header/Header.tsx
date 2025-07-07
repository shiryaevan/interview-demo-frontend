import { Section } from "@/components/Section";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui";
import { AlignJustify } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "@/features/auth/Login/authSlice.ts";
import { useRouter } from "@/hooks/useRouter.ts";

export const Header = () => {
  const dispatch = useDispatch();
  const { redirectPage, router } = useRouter();

  const onLogoutClickHandler = () => {
    dispatch(logout());
    redirectPage(router, "login");
  };

  return (
    <header className="flex h-(--header-height) items-center border-b">
      <Section>
        <div className="flex w-full items-center gap-1">
          <h1 className="font-medium text-3xl">Flowers inc.</h1>
          <div className="ml-auto flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <AlignJustify />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Demo Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogoutClickHandler}>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Section>
    </header>
  );
};
