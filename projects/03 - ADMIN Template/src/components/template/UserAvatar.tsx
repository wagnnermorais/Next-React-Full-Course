import useAuth from "@/hooks/useAuth";
import Link from "next/link";

export default function UserAvatar() {
  const { user } = useAuth();
  return (
    <div className="w-12 h-12">
      <Link href="/profile">
        <img
          src={user?.image ?? "/images/avatar.svg"}
          alt="User Avatar"
          className="w-full h-full rounded-full cursor-pointer"
        />
      </Link>
    </div>
  );
}
