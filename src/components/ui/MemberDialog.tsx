import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Mail, Calendar, Award, User, MapPin, Phone, Heart, Droplet } from "lucide-react"


interface Member {
  name: string;
  role: string;
  image: string;
  width: number;
  height: number;
  bio?: string;
  contact?: string;
  riid?: string;
  classification?: string;
  joinDate?: string;
  inductionDate?: string;
  achievements?: string[];
  birthday?: string;
  weddingDay?: string;
  spouse?: string;
  tel?: string;
  cell?: string;
  address?: string;
  sponsor?: string;
  bloodGroup?: string;
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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-center">{member.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="text-center">
            <Avatar className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover">
              <AvatarImage src={member.image ? (member.image.startsWith('/') ? member.image : `/${member.image}`) : member.image} />
              <AvatarFallback>{(() => {
                const nameParts = member.name.split(' ').filter(part => part && !part.includes('*'));
                const actualName = nameParts.slice(1);
                if (actualName.length >= 2) {
                  return (actualName[0].charAt(0) + actualName[actualName.length - 1].charAt(0)).toUpperCase();
                }
                return actualName[0]?.charAt(0).toUpperCase() || '';
              })()}</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">{member.role}</h3>
          </div>

          {member.bio && (
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center">
                <User className="h-4 w-4 mr-2" />
                About
              </h4>
              <p className="text-sm text-gray-700">{member.bio}</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 text-sm">
            {member.riid && (
              <div>
                <span className="font-semibold">RI ID:</span>
                <p className="text-gray-600">{member.riid}</p>
              </div>
            )}
            {member.classification && (
              <div>
                <span className="font-semibold">Classification:</span>
                <p className="text-gray-600">{member.classification}</p>
              </div>
            )}
            {member.joinDate && (
              <div>
                <span className="font-semibold">Joined:</span>
                <p className="text-gray-600">{member.joinDate}</p>
              </div>
            )}
            {member.inductionDate && (
              <div>
                <span className="font-semibold">Induction Date:</span>
                <p className="text-gray-600">{member.inductionDate}</p>
              </div>
            )}
            {member.contact && (
              <div>
                <span className="font-semibold flex items-center">
                  <Mail className="h-3 w-3 mr-1" />
                  Email:
                </span>
                <p className="text-gray-600">{member.contact}</p>
              </div>
            )}
            {member.birthday && (
              <div>
                <span className="font-semibold flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Birthday:
                </span>
                <p className="text-gray-600">{member.birthday}</p>
              </div>
            )}
            {member.weddingDay && (
              <div>
                <span className="font-semibold flex items-center">
                  <Heart className="h-3 w-3 mr-1" />
                  Wedding Day:
                </span>
                <p className="text-gray-600">{member.weddingDay}</p>
              </div>
            )}
            {member.spouse && (
              <div>
                <span className="font-semibold">Spouse:</span>
                <p className="text-gray-600">{member.spouse}</p>
              </div>
            )}
            {member.tel && (
              <div>
                <span className="font-semibold flex items-center">
                  <Phone className="h-3 w-3 mr-1" />
                  Tel:
                </span>
                <p className="text-gray-600">{member.tel}</p>
              </div>
            )}
            {member.cell && (
              <div>
                <span className="font-semibold flex items-center">
                  <Phone className="h-3 w-3 mr-1" />
                  Cell:
                </span>
                <p className="text-gray-600">{member.cell}</p>
              </div>
            )}
            {member.address && (
              <div className="col-span-2">
                <span className="font-semibold flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  Address:
                </span>
                <p className="text-gray-600">{member.address}</p>
              </div>
            )}
            {member.sponsor && (
              <div>
                <span className="font-semibold">Sponsor:</span>
                <p className="text-gray-600">{member.sponsor}</p>
              </div>
            )}
            {member.bloodGroup && (
              <div>
                <span className="font-semibold flex items-center">
                  <Droplet className="h-3 w-3 mr-1" />
                  Blood Group:
                </span>
                <p className="text-gray-600">{member.bloodGroup}</p>
              </div>
            )}
          </div>

          {member.achievements && member.achievements.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center">
                <Award className="h-4 w-4 mr-2" />
                Achievements
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.achievements.map((achievement, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {achievement}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

