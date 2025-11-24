import { redirect } from "next/navigation";

export default function Gallery() {
  // Redirect to events by default, or you can show all galleries
  redirect("/gallery/events");
}

