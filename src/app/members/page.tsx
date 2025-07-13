import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MemberDialog } from "../../components/ui/MemberDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Members() {
  const memberCategories = [
    {
      id: "executive",
      label: "Executive Committee",
      members: [
        {
          name: "Rtn. Pradeep Thapa",
          role: "President",
          image: "/images/clubmembers/executive_members/Pradeep .jpg",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Pritam Poudel",
          role: "Imm. Past President",
          image:
            "/images/clubmembers/executive_members/Pitambar-Poudel.jpg?height=200&width=200",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Sita Maya Poudel",
          role: "President Elect",
          image:
            "/images/clubmembers/executive_members/sita ma'am.jpg?height=200&width=200",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Bishnu Poudel",
          role: "Vice President",
          image: "",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Shankar Khadka",
          role: "Vice President",
          image:
            "/images/clubmembers/executive_members/Shankar Khadka.jpg?height=200&width=200",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Banshi Sharma",
          role: "Secretary",
          image: "/images/clubmembers/executive_members/banshi.jpg",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Nikesh Sthapit",
          role: "Joint Secretary",
          image:
            "/images/clubmembers/executive_members/Nikesh Sthapit.jpg?height=200&width=200",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Rajendra Neupane",
          role: "Treasurer",
          image: "/images/clubmembers/executive_members/rajendra neupane.jpg",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Uttam khadka",
          role: "Director Membership Comm.",
          image:
            "/images/clubmembers/executive_members/UTTAM SIR.jpg?height=200&width=200",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Ganesh Poudel",
          role: "Director Club Admin Comm.",
          image:
            "/images/clubmembers/executive_members/Ganesh Sir.jpg?height=200&width=200",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Gautam Prasad Khanal",
          role: "Director-Service Project Comm.",
          image:
            "/images/clubmembers/executive_members/Gautam Khanal.jpg?height=200&width=200",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Suabash Ghimire",
          role: "Director-Public Realtion Comm.",
          image:
            "/images/clubmembers/executive_members/Subash sir-NP.jpg?height=200&width=200",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Khem Raj Ghimire",
          role: "Director-TRF Comm.",
          image: "/images/clubmembers/executive_members/khem.jpg",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Dilli Ram Adhikari",
          role: "Sergeant At Arms",
          image:
            "/images/clubmembers/executive_members/Dilli-Ram.jpg?height=200&width=200",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Gopal Raj Pokhrel",
          role: "Club Mentor",
          image:
            "/images/clubmembers/executive_members/Gopal sir.jpg?height=200&width=200",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Rishi Raj Upadhaya",
          role: "Chief Advisor",
          image: "",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Rabindra Jung Thapa",
          role: "TEACH Co-ordinator",
          image:
            "/images/clubmembers/executive_members/Rabindra sir.jpg?height=200&width=200",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Bir Bahadur Tamang",
          role: "Club Trainer",
          image: "/images/clubmembers/executive_members/bir bahadur.jpg",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Shyam Nagarkoti",
          role: "RCC Co-ordinator",
          image:
            "/images/clubmembers/executive_members/Shyam Nagarkoti.jpg?height=200&width=200",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
        {
          name: "Rtn. Basudev Shrestha",
          role: "Rotaratc/Interact/RCC Coordinator",
          image: "/images/clubmembers/executive_members/Basu Dev Shrestha.jpg",
          width: 200,
          height: 200,
          bio: "",
          contact: "",
        },
      ],
    },
    {
      id: "chartered",
      label: "Chartered Members",
      members: [
        {
          name: "Rtn. Mrs. Deepa Rana",
          role: "Founding Member",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Subarna J.Rana ",
          role: "Founding Member",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Kusum Shrestha",
          role: "Founding Member",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Miss Millu Thapa",
          role: "Founding Member",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn.Miss Indira Nakarmi",
          role: "Founding Member",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Miss Anjupa Shrestha",
          role: "Founding Member",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Hari Nakarmi",
          role: "Founding Member",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Miss Susila Nepali",
          role: "Founding Member",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Mrs. Indira Malla",
          role: "Founding Member",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Mrs. Ruth Jensen",
          role: "Founding Member",
          image: "",
          width: 200,
          height: 200,
        },
      ],
    },
    {
      id: "active",
      label: "Active Members",
      members: [
        {
          name: "Rtn. Ram Lal Shrestha",
          role: "RIID: 2200051",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Rishi Raj Upadhyaya",
          role: "RIID: 3397803",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Buddhi Man Shrestha",
          role: "RIID: 3470586",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Gopal Raj Pokhrel",
          role: "RIID: 5441709",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Santosh Bikram Shah",
          role: "RIID: 5929856",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Uttam Khadka",
          role: "RIID: 6559951",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Raju Kumar Sibakoti",
          role: "RIID: 6559953",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Rabindra Jung Thapa",
          role: "RIID: 6625077",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Umesh Kumar Agrawal",
          role: "RIID: 8116806",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Bir Bahadur Tamang",
          role: "RIID: 8558560",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Bishnu Prasad Paudel",
          role: "RIID: 8997816",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Sujan Subedi",
          role: "RIID: 8997817",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Balram Rai",
          role: "RIID: 8997818",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Pitambar Paudyal",
          role: "RIID: 8997819",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Gautam Prasad Khanal",
          role: "RIID: 8997820",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Pradeep Thapa",
          role: "RIID: 8997821",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Nirmal Bastola",
          role: "RIID: 9250651",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Khem Raj Ghimire",
          role: "RIID: 9528363",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Shyam Nagarkoti",
          role: "RIID: 9680769",
          image: "/viber image 2020 12 27 10 46 11?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Ganesh Prasad Poudel",
          role: "RIID: 9692774",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Subash Ghimire",
          role: "RIID: 10003226",
          image: "/Subash sir NP?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Babu Krishna Thapa",
          role: "RIID: 10099938",
          image: "/babukrishna?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Sudarshan Bista",
          role: "RIID: 10099939",
          image: "/sudarshan?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Kamal Dev Malla",
          role: "RIID: 10120488",
          image: "/kamal dev?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Sagar Dhakal",
          role: "RIID: 10320266",
          image: "/IMG 9054?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Sita Maya Poudel",
          role: "RIID: 10782762",
          image: "/sitamaya?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Dr. Pratikchhya Shrestha",
          role: "RIID: 10620116",
          image: "/pratikshya?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Purni Tamang",
          role: "RIID: 11150363",
          image: "/purni?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Rajesh Karki",
          role: "RIID: 11202304",
          image: "/rajesh?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Nikesh Sthapit",
          role: "RIID: 11508263",
          image: "/Nikesh Sthapit?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Suneeta Regmi",
          role: "RIID: 11508289",
          image: "/Suneeta Regmi Pokhrel?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Basudev Shrestha",
          role: "RIID: 11511042",
          image: "/Basu Dev Shrestha?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Shyam Prasad Bhandari",
          role: "RIID: 11582578",
          image: "/Shyam Prasad Bhandari?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Maya Ghimire",
          role: "RIID: 11582581",
          image: "/maya?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Shankar Khadka",
          role: "RIID: 11582582",
          image: "/Shankar Khadka?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Sugat Adhikari",
          role: "RIID: 11629037",
          image: "/Sugat Adhikari?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Dilli Ram Adhikari",
          role: "RIID: 12148804",
          image: "/Dilli Ram Adhikari?height=200&width=200",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Uttam Jung Kunwar",
          role: "RIID: 11835152",
          image: "/Uttam?height=200&width=200",
          width: 200,
          height: 200,
        },
      ],
    },
    {
      id: "past",
      label: "Past Presidents",
      members: [
        {
          name: "Rtn. Shyam Bahadur Panday",
          role: "1993–1996",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Late Rtn. Madhusudan Sharma",
          role: "1996–1997",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Dhruba Narayan Shrestha",
          role: "1997–1998",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Dr. S.K. Pahari",
          role: "1998–1999",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Mohan Raj Sharma",
          role: "1999–2000",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Mingma Sherpa",
          role: "2000–2001",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Late Rtn. Shanta Ram Bhandary",
          role: "2001–2002",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Shanta Kumar Malla",
          role: "2002–2003",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Prayag Dutt Tewari",
          role: "2003–2004",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Keshab Bahadur Shah",
          role: "2004–2005",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Prabhu Krishna Shrestha",
          role: "2005–2006",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Late Rtn. Godavari Lal Maskay",
          role: "2006–2007",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Gopal Raj Pokhrel",
          role: "2007–2008",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Ram Prasad Bhandari",
          role: "2008–2009",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Dr. Budhi Man Shrestha",
          role: "2009–2010",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Purushottam Pd. Sharma",
          role: "2010–2011",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Raju Kumar Sibakoti",
          role: "2011–2012",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Uttam Khadka",
          role: "2012–2013",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Rishi Raj Upadhaya",
          role: "2013–2014",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Rabindra Jung Thapa",
          role: "2014–2015",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Rose Garden Pradhan",
          role: "2015–2016",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Bir Bahadur Tamang",
          role: "2016–2017",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Ajay Regmi",
          role: "2017–2018",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Bal Ram Rai",
          role: "2018–2019",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Umesh Kumar Agrawal",
          role: "2019–2020",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Gautam Pd. Khanal",
          role: "2020–2021",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Khem Raj Ghimire",
          role: "2021–2022",
          image: "",
          width: 200,
          height: 200,
        },
        {
          name: "Rtn. Ganesh Prasad Poudel",
          role: "2022–2023",
          image: "",
          width: 200,
          height: 200,
        },
      ],
    },
    {
      id: "Rotaract Clubs",
      label: "Rotaract Clubs",
      members: [
        {
          name: "Rotaract Club of Kathmandu North",
          role: "Chartered on 2023-01-01",
          image: "/images/clubmembers/rotaract_club_of_kathmandu_north.jpg",
          width: 200,
          height: 200,
        },
        {
          name: "Rotaract Club of Reliance College",
          role: "Chartered on 2023-01-01",
          image:
            "/images/clubmembers/rotaract_club_of_kathmandu_north_east.jpg",
          width: 200,
          height: 200,
        },
        {
          name: "Rotaract Club of Kantipur Dental College",
          role: "Chartered on 2023-01-01",
          image:
            "/images/clubmembers/rotaract_club_of_kathmandu_north_west.jpg",
          width: 200,
          height: 200,
        },
        {
          name: "Rotaract Club of Kathmandu Medical College",
          role: "Chartered on 2023-01-01",
          image:
            "/images/clubmembers/rotaract_club_of_kathmandu_north_west.jpg",
          width: 200,
          height: 200,
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Our Members</h1>
      <Tabs defaultValue="executive" className="w-full">
        <TabsList className="w-full justify-start">
          {memberCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {memberCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.members.map((member, index) => (
                <Card key={index}>
                  <CardContent className="pt-4 sm:pt-6">
                    <div className="text-center">
                      <Avatar className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-3 sm:mb-4 object-cover">
                        <AvatarImage src={member.image} />
                        <AvatarFallback>
                          {(() => {
                            const nameParts = member.name
                              .split(" ")
                              .filter((part) => part && !part.includes("*"));
                            const actualName = nameParts.slice(1);
                            if (actualName.length >= 2) {
                              return (
                                actualName[0].charAt(0) +
                                actualName[actualName.length - 1].charAt(0)
                              ).toUpperCase();
                            }
                            return actualName[0]?.charAt(0).toUpperCase() || "";
                          })()}
                        </AvatarFallback>
                      </Avatar>

                      {category.id === "executive" ? (
                        <MemberDialog member={member} />
                      ) : (
                        <h3 className="font-bold text-base sm:text-lg">
                          {member.name}
                        </h3>
                      )}
                      <p className="text-sm sm:text-base text-gray-600">
                        {member.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
