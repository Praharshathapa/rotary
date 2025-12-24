import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface RotaractClub {
  name: string;
  role: string;
  image: string | string[];
  width: number;
  height: number;
}

interface RotaractClubDialogProps {
  club: RotaractClub;
}

export function RotaractClubDialog({ club }: RotaractClubDialogProps) {
  const images = Array.isArray(club.image) ? club.image : [club.image];
  const primaryImage = images[0];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="font-bold text-sm sm:text-base text-blue-900 break-words whitespace-normal text-center h-auto py-1 px-2">
          {club.name}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">{club.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="text-center">
            {images.length > 0 && primaryImage ? (
              <div className="space-y-4">
                {images.length === 1 ? (
                  <div className="w-full mx-auto mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={primaryImage.startsWith('/') ? primaryImage : `/${primaryImage}`}
                      alt={club.name}
                      width={club.width || 800}
                      height={club.height || 600}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.map((img, index) => (
                      <div key={index} className="w-full mx-auto rounded-lg overflow-hidden">
                        <Image
                          src={img.startsWith('/') ? img : `/${img}`}
                          alt={`${club.name} - Image ${index + 1}`}
                          width={club.width || 400}
                          height={club.height || 300}
                          className="w-full h-auto object-contain rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full min-h-[200px] mx-auto mb-4 rounded-lg bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">No image available</p>
              </div>
            )}
            <h3 className="text-lg font-semibold text-blue-900 mb-2">{club.role}</h3>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

