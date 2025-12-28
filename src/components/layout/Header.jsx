import ProfileAvatar from "../users/ProfileAvatar";

export default function Header() {
  return (
    <header className="flex justify-between items-center sticky top-0 left-0 w-full p-6 bg-white z-10">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <ProfileAvatar name="User" size="md" />
    </header>
  );
}