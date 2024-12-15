import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export function BackButton() {
  return (
    <Link href="#" className="absolute top-6 left-6 text-white">
      <ChevronLeft className="w-6 h-6" />
    </Link>
  );
}
