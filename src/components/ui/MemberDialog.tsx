import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface Member {
  name: string;
  role: string;
  image: string;
  bio: string;
  contact: string;
}

interface MemberDialogProps {
  member: Member;
}

export function MemberDialog({ member }: MemberDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="font-bold text-base sm:text-lg text-blue-900">
          {member.name}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{member.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto"
          />
          <p className="text-center font-semibold">{member.role}</p>
          <p>{member.bio}</p>
          <p className="text-sm text-gray-500">Contact: {member.contact}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

