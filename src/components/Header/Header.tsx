import { Section } from "@/components/Section";

export const Header = () => {
  return (
    <header className="flex h-(--header-height) items-center border-b">
      <Section>
        <div className="flex w-full items-center gap-1">
          <h1 className="font-medium text-3xl">Flowers inc.</h1>
          <div className="ml-auto flex">Profile</div>
        </div>
      </Section>
    </header>
  );
};
