import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface Member {
  name: string;
  role: string;
  image: string;
  width: number;
  height: number;
  bio?: string;
  contact?: string;
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
         <Avatar className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-3 sm:mb-4 object-cover">
  <AvatarImage src={member.image}  />
  <AvatarFallback>{(() => {
      const nameParts = member.name.split(' ').filter(part => part && !part.includes('*'));
      const actualName = nameParts.slice(1);
      if (actualName.length >= 2) {
        return (actualName[0].charAt(0) + actualName[actualName.length - 1].charAt(0)).toUpperCase();
      }
      return actualName[0]?.charAt(0).toUpperCase() || '';
    })()}</AvatarFallback>
</Avatar>
          <p className="text-center font-semibold">{member.role}</p>
          <p>{member.bio}</p>
          <p className="text-sm text-gray-500">Contact: {member.contact}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

