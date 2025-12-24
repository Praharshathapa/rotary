import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Award, Heart, Globe } from 'lucide-react';

export default function RotaryGoalsPage() {
  return (
    <main className="min-h-screen bg-[rgb(var(--surface))]">
      {/* Hero -------------------------------------------------- */}
      <section className="hero-gradient relative isolate overflow-hidden px-6 pt-30 pb-15 sm:pt-44 sm:pb-44">
        {/* angled edge */}
        <div
          aria-hidden
          className="absolute inset-x-0 -bottom-px h-10 bg-gradient-to-t from-[rgb(var(--surface))] to-transparent"
        />
        <div className="mx-auto max-w-5xl text-center lg:text-left">
          <div className="lg:w-3/4">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl [font-family:'Merriweather',serif]">
              Rotary Goals 2025–26
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl max-w-2xl mx-auto lg:mx-0">
              The Rotary Club of Kathmandu North – serving with purpose,
              integrity and measurable impact since 1995.
            </p>
          </div>
        </div>
      </section>

      {/* About & Stats ----------------------------------------- */}
      <section className="container mx-auto max-w-7xl -mt-20 pb-12 px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="card-glass">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                About Our Club
              </CardTitle>
            </CardHeader>
            <CardContent className="text-[rgb(var(--text-secondary))] leading-relaxed">
              Chartered in 1995, the Rotary Club of Kathmandu North has driven
              sustainable change for three decades. Through local service and
              global initiatives, we uphold Rotary&apos;s highest ethical standards
              while fostering fellowship and innovation.
            </CardContent>
          </Card>

          <Card className="card-glass">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Club at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <Stat label="Founded" value="1995" />
              <Stat label="Active Members" value="50+" />
              <Stat label="Projects Completed" value="100+" />
              <Stat label="Lives Impacted" value="10,000+" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Club Information ----------------------------------------- */}
      <section className="container mx-auto max-w-7xl px-6 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="card-glass">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-[rgb(var(--brand-blue))]" />
                Meeting Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[rgb(var(--text-secondary))]">Day:</span>
                <span className="font-semibold">Every Saturday</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[rgb(var(--text-secondary))]">Time:</span>
                <span className="font-semibold">7:00 AM - 8:30 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[rgb(var(--text-secondary))]">Venue:</span>
                <span className="font-semibold">Hotel Yak & Yeti</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[rgb(var(--text-secondary))]">Location:</span>
                <span className="font-semibold">Durbar Marg, Kathmandu</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-glass">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-[rgb(var(--brand-blue))]" />
                Club Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[rgb(var(--text-secondary))]">Club ID:</span>
                <span className="font-semibold">RCKN</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[rgb(var(--text-secondary))]">District:</span>
                <span className="font-semibold">3292</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[rgb(var(--text-secondary))]">Zone:</span>
                <span className="font-semibold">Zone 6</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[rgb(var(--text-secondary))]">Classification:</span>
                <span className="font-semibold">Community</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-glass">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center">
                <Award className="h-5 w-5 mr-2 text-[rgb(var(--brand-blue))]" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[rgb(var(--text-secondary))]">2024:</span>
                <Badge variant="secondary">Best Service Project</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[rgb(var(--text-secondary))]">2023:</span>
                <Badge variant="secondary">Membership Growth Award</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[rgb(var(--text-secondary))]">2022:</span>
                <Badge variant="secondary">Community Impact Award</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[rgb(var(--text-secondary))]">2021:</span>
                <Badge variant="secondary">Innovation in Service</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Areas of Focus ----------------------------------------- */}
      <section className="container mx-auto max-w-7xl px-6 pb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-[rgb(var(--brand-blue))]">
          Our Areas of Focus
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areasOfFocus.map((area, index) => (
            <Card key={index} className="card-glass hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {area.icon}
                  <CardTitle className="text-lg font-semibold ml-2">
                    {area.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[rgb(var(--text-secondary))] text-sm leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Goals -------------------------------------------------- */}
      <section className="container mx-auto max-w-7xl px-6 pb-24 space-y-16">
        <section className="animate-fade-up">
          <GoalSection
            title="Rotary International Goals 2025–26"
            img="images/goals/RI president.png"
            pdf="/downloads/RI_Goals_2025-26.pdf"
            data={riGoals}
            hoverTitle="RI President"
          />
          <GoalSection
            title="District Goals 2025–26"
            img="images/goals/district .jpg"
            pdf="/downloads/District Goals 2025-26, RID 3292.pdf"
            data={districtGoals}
            hoverTitle="District Governor"
          />
          <GoalSection
            title="Club President Goals 2025–26"
            img="images/goals/president goals.jpg"
            pdf="/downloads/President_Goals_2025-26.pdf"
            data={presidentGoals}
            hoverTitle="Club President"
          />
        </section>
      </section>

      {/* RCKN Profile Section ----------------------------------------- */}
      <section id="club-profile" className="container mx-auto max-w-7xl px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[rgb(var(--brand-blue))] mb-4 [font-family:'Merriweather',serif]">
            Profile of Rotary Club of Kathmandu North (RCKN)
          </h2>
        </div>

        <Card className="card-glass">
          <CardContent className="p-8 space-y-8">
            <div className="prose prose-lg max-w-none text-[rgb(var(--text-secondary))]">
              <ProfileSection
                number="1"
                content={
                  <>
                    RCKN was chartered on <strong>29th Dec, 1993</strong>, as a member of Rotary International (RI) and its charter presentation ceremony was organized on <strong>8th May, 1994</strong>. RCKN was formed with <strong>25 members</strong> including a female member, led by the Charter President (CP) <strong>Shyam Bahadur Pandey</strong>, Chairman of Hotel Shangri-la. RCKN was sponsored by RC Kathmandu, the pioneer Rotary Club of Nepal, which was formed on <strong>13th April 1959</strong>. Past District Governor (PDG) Rotarian (Rtn) <strong>Themas Rustamji Manekshaw</strong>, who was the Governor of District 3290 for Rotary Year 1992-93, was assigned as the Governor&apos;s Special Representative to guide for smooth functioning of the club in the initial years. According to the record this club was the <strong>10th club</strong> formed in Nepal and the <strong>fifth club</strong> formed in Kathmandu valley.
                  </>
                }
              />

              <ProfileSection
                number="2"
                content={
                  <>
                    The name of this club was adopted <strong>Kathmandu North</strong> because there were no other Rotary Clubs north from central Kathmandu back then. Also, all of the founding members of this club were residents of <strong>Lazimpat and Maharajganj</strong> area.
                  </>
                }
              />

              <ProfileSection
                number="3"
                content={
                  <>
                    RCKN designed its banner depicting the unique <strong>sixth century stone sculpture of sleeping Lord Vishnu &quot;Budhanilkantha&quot;</strong> on its foreground under the majestic Himalayans Range (abode of snow), to signify the universal symbol of peace, progress and prosperity.
                  </>
                }
              />

              <ProfileSection
                number="4"
                content={
                  <>
                    RCKN was founded at a time when Rotary was known to a very few and the service activities of Rotary were also limited. According to the Charter President Rtn Shyam, there were groups of professionals and business persons who were inclined towards social service. These individuals were making efforts to form more Rotary clubs around Nepal in order to expand the service oriented activities and extend the fellowship base of professional acquaintances. CP Rtn Shyam gives credit to one of his friends, veteran Rotarian <strong>Kamal Mani Dixit</strong>, who encouraged him to form a Rotary club by organizing meetings with like-minded friends residing in Lazimpat and Maharajganj. CP Rtn Shyam also wishes to remember one of his close friends, <strong>Late Dilli Raj Upreti</strong> who worked diligently for organizing working meetings with prospective members in the process of forming this club and finally RCKN became a member of Rotary International (RI) having the motto <strong>&quot;Service Above Self&quot;</strong>.
                  </>
                }
              />

              <ProfileSection
                number="5"
                content={
                  <>
                    In the initial years of its formation, RCKN extended its support to <strong>Sri Ram Primary School</strong> and <strong>Dhurba Tara Primary School</strong>, both located in the villages of Budhanilkantha area. The support was provided to construct class rooms and toilets. One of the notable community service activities of this club is the construction of bus stands on either side of <strong>Dhapasi, Chakrapath (Kathmandu Ring road)</strong>.
                  </>
                }
              />

              <ProfileSection
                number="6"
                title="RY 1995-96"
                content={
                  <>
                    The most remarkable service activity of this club has been the successful initiative of acquiring a <strong>3-H Grant</strong> from the RI in partnership with other clubs in March 1996. Rotary International approved the first 3-H (Health Hunger and Humanity) Grant for Nepal (one of the 11 approved projects out of 138 applicants) worth of <strong>US $ 3,70,000</strong> to provide Radiotherapy Cobalt 60 TeleTherapy Machine to Bhaktapur Cancer Hospital on the request of Nepal Cancer Relief Society (NCRS), Govt. of Nepal contributed Rs: 5.5 Million and NCRS raised 2.5 Million to construct a new building with bunker for the Radiotherapy machine. The new department was inaugurated on <strong>October 8, 1999</strong> by the late King Birendra. All this effort was the initiative of <strong>Rtn. Dr. Bibek Bahadur Pradhan</strong> from the Rotary Club of Mansfield UK, who had proposed for this project with Rotary clubs of Nepal and the Rotary Foundation. The seed money of US $ 5,000 was contributed by the 5 Rotary Clubs of Kathmandu valley (1 Thousand each), when there were : Rotary Club of Kathmandu, Rotary Club of Patan, Rotary Club of Kathmandu Mid Town, Rotary Club of Kathmandu North and Rotary Club of Patan West. In 2004 a Rotary Walkathon was organized to collect funds to make up for treatment of destitute cancer patients and raised Rs 3 million. The fund has been awarded to the hospital to provide free treatment to 200 destitute cancer patients every year. Till date the facility is continuing.
                  </>
                }
              />

              <ProfileSection
                number="7"
                content={
                  <>
                    In <strong>1999</strong>, RCKN contributed an ambulance to the <strong>Maharajganj Community Service Centre</strong> and the ambulance was used by that community for 7 years. In 2007, that ambulance was donated to <strong>Budhebare, Jhapa</strong> based Mother&apos;s Group, where it is reported to be operating well.
                  </>
                }
              />

              <ProfileSection
                number="8"
                content={
                  <>
                    In <strong>2003</strong>, in conjunction with the support from RI International Humanitarian Grant No 20641 and World Community Service, RC of Tiel, the Netherlands and donation from the Netherlands, RCKN was involved to equip the Orthopedic and Trauma Surgery Department with medical equipment and materials and provide medical services to the patience with orthopedic problems at <strong>Tribhuvan University Teaching Hospital</strong>. This <strong>US $ 80,000</strong> worth project also included Rotary Volunteers Services and 6 month long scholarship to an Orthopedic doctor for the postgraduate training in Europe and 6 weeks long scholarship to three orthopedic nurses for training in the Netherlands.
                  </>
                }
              />

              <ProfileSection
                number="9"
                content={
                  <>
                    In <strong>2004</strong>, The Rotary Foundation Matching Grant (MG) # 0423051, International Partner RC Sutton Coldfield, England, District-1060, MG Amount <strong>USD 15,939.00</strong>. Project Objectives - The project helped set up a library, science and computer labs at <strong>Pegasus English School</strong> located in Jorpati VDC, Kathmandu.
                  </>
                }
              />

              <ProfileSection
                number="10"
                content={
                  <>
                    In <strong>2005-06</strong>, MG#51049 International Partner RC of Remuera, Newzealand, District-1065, MG Amount <strong>USD 15035.94</strong>. Project Objectives - The project was focused to provide scholarship to young Sherpas for various vocational trainings useful in the community. On behalf of the host club RCKN, <strong>Sir Edmund Hillary Foundation</strong> contributed USD 731.94 to match for TRF Grant allocation.
                  </>
                }
              />

              <ProfileSection
                number="11"
                content={
                  <>
                    In <strong>2006-07</strong>, in partnership and support from Action Aid Nepal, the club has provided physiotherapy equipment and accessories worth <strong>Rs 3,70,000.00</strong> to the <strong>Jeevan Kalyan Kendra</strong>, located at Kalanki, Kathmandu, which provides trainings and rehabilitation to the mentally and physically challenged young children.
                  </>
                }
              />

              <ProfileSection
                number="12"
                content={
                  <>
                    In <strong>2007-08</strong> the club supported to add 3 more class rooms in <strong>Ishwori Primary School</strong>, situated in the remote hilly area of Sundarijal, with the financial support of Rs 350,000/ from RC Salt Lake City, Utah, USA and Rs 80,000/ from the club and about Rs 100,000/ worth of materials and labour from the local people/club and Rotary Community Corps (RCC), Sundarijal. Those additional rooms helped the school to elevate it to middle school level, allowing younger students to continue studying up to class 8 in their own locality. In 2013-14, 2 more rooms were added to facilitate Library and Computer class. For construction of those rooms, financial support of Rs 200,000/ from RC Jackson Heights, NY, USA, Rs 100,000/ from Rtn Bir Bahadur Tamang and Rs 100,000/ from other members of the club was received. During construction of the 2 rooms, and for painting of the whole 5 rooms of the school, Rotoracts and students of Reliance International Academy, Chabahil provided physical and material support.
                  </>
                }
              />

              <ProfileSection
                number="13"
                title="RY 2007-08"
                content={
                  <>
                    MG #, International Partner RC of Ahrensburg, Germany, District-1890, MG Amount- <strong>USD 31,000.00</strong>. The project was aimed to purchase an ambulance for the benefit of the Children-at-Risks of Nepal at <strong>Charity (Agape) Nepal</strong>, a subsidiary charity organization of Agape Germany. The club managed ambulance service extensively for the benefit of as many children homes in Kathmandu valley and outside the valley.
                  </>
                }
              />

              <ProfileSection
                number="14"
                title="RY 2009-10"
                content={
                  <>
                    MG # 73403, International Partner- RC Leesburg, District-7610, Virginia, USA. MG Amount - <strong>USD 16,270.00</strong>. Beneficiaries - Orphans of various Orphanage Homes under <strong>Nepal Children Organization</strong>, Naxal, Kathmandu and Female Community Health Volunteers (FCHV). Project sites - Nepal Children Organization, Naxal and <strong>Kantipur Dental College and Teaching Hospital (KDCTH)</strong> Kathmandu. Project Objectives - Checkup /Treatment of Oral and dental problems including follow up of children- at- risk and awareness/advocacy workshop to Female Community Health Volunteers (FCHV). On behalf of the host club RC Kathmandu North, Kantipur Dental College and Teaching Hospital contributed USD 3500 to match for TRF Grant.
                  </>
                }
              />

              <ProfileSection
                number="15"
                title="RY 2015-16"
                content={
                  <>
                    MG #1532880, International Partner- RC Misbourne Matins, England. MG Amount-<strong>USD 48321</strong>. Beneficiaries- Mothers, neonatal babies, local FCHVs and caregivers. Project site- <strong>Primary Health Care Center at Yari Village of Muchu VDC, Humla</strong>. Project Objectives- The project aimed to establish and fully equip the primary health care center already established by the Nepal Trust-Yalbang at Yari Village of Muchu VDC, Humla district, and to facilitate that public health utility with dedicated birthing centre and also to recruit and train local staffs to upgrade their nursing and caring skills.
                  </>
                }
              />

              <ProfileSection
                number="16"
                title="RY 2015-16"
                content={
                  <>
                    Two Swiss citizens, namely <strong>Mr Jurg Gunther and Ms Brigitte Werzinger</strong>, who had been supporting to run the <strong>Indreni Children Home (ICH)</strong>, an orphanage, at Sundarijal, proposed RCKN for its support and cooperation toward construction of a permanent residence for the ICH. RCKN decided to undertake that project. Mr Jurg Gunther and Ms Brigitte Werzinger contributed <strong>USD 85,000</strong> (US Dollar Eighty Five Thousand) to purchase land and construction of suitable homes at Sundarijal locality. The club purchased land measuring <strong>8.2 Aana</strong> of land and constructed the ground floor of the building. Later with the financial contribution of Rs 45 lakh from NEUTEC Ltd and Rs 25 lakh from Indreni Ireland, a 3 storied building has been built. Now RCKN has entered into an agreement with the ICH management for use of the building exclusively for the residential purpose of the orphan by ICH.
                  </>
                }
              />

              <ProfileSection
                number="17"
                title="RY 2016-17"
                content={
                  <>
                    Global Grant (GG) # 1747108. International Partner- RC Stowe, Vermont, RID- 7850 USA and Canada. GG Amount- <strong>USD 35000</strong>. Beneficiary – Students, teachers and IT staff of <strong>Shree Ram Secondary High School, Koshidekha, of Panchkhal</strong>. Project site - Shree Ram Secondary High School, Koshidekha, of Panchkhal. Project Objectives- The aim of this project was to upgrade the existing library with additional books and shelves and train a librarian for proper management of the library, establishment of Resource Technology Center by providing necessary and reliable backups for electronic networks in the Shree Ram Secondary High School, Koshidekha, of Panchkhal Sub-Metropolitan City of Kavre District, Nepal. A team of volunteers from the USA, with expertise in library management and pedagogy, were also involved to impart training to the library staff and teachers of the school in two alternate sessions.
                  </>
                }
              />

              <ProfileSection
                number="18"
                title="RY 2017-20"
                content={
                  <>
                    GG#1532880, International Partners RC Wu Cu, Taipei City and RID-3490 Taiwan. GG Amount <strong>US$ 111625</strong>. Project Objectives – A. Capacity building of oral health education for vulnerable/disparity groups in Nepal. B. Impart skill development trainings to the Specialist Dentists, PG Students, Dental Surgeons and Dental Hygienists of KDCTHRC. C. Conduct a National pathfinder survey and case-control study of Oral Health status in Nepal based on World Health Organization Survey. Beneficiaries – Patients of vulnerable/disparity category with special needs and Dentists and Dental Hygienists. Project Sites – <strong>Kantipur Dental College and Teaching Hospital and Research Center (KDCTHRC)</strong>, one Oral Health Community Center in Pokhara, branch of KDCTHRC. The execution of this Humanitarian service project was accomplished by setting up one Special Need Oral Care Center in Kathmandu, at Kantipur Dental College and Teaching Hospital and Research Center (KDCTHRC), and three Oral Health Outreach Centers. The National pathfinder survey and case-control study of oral health status was carried out in certain areas of Syangja and Kaski districts. Having established the Special Need Oral Care Center, first in Nepal, along with Special Dentists, KDCTHRC was recognized as the Tertiary Treatment Center for treatment of oral diseases and entered into a Memorandum of Understanding with Nepal Special Olympic Committee with the objectives to prevent and treat oral diseases of athletes of Nepal participating in Special Olympic Games.
                  </>
                }
              />

              <ProfileSection
                number="19"
                title="RY 2020-22"
                content={
                  <>
                    GG#1988030, International Partners RC WuKu Jin Jong, Taipeh and RID-3490, Taiwan. GG Amount <strong>US$ 111800</strong>. Project Objectives -&quot;Un-reach to Reach Oral Care Project in Rural Areas of Nepal&quot;. Beneficiaries– Patients of rural remote areas affected with oral/dental problems and local health care professionals. Project Sites – a. Rotary Kantipur Dental Center in Galyang City Hospital Syangja of Syangja District, b. Rotary Kantipur Dental Center Bhalwari Tilottama of Rupendahi District and c. Rotary Kantipur Dental Center Pokhara of Kaski District. This project aimed to address community needs and produce sustainable, measurable outcomes regarding prevalence of oral/dental problems with following goals: a. Improving the capacity of local health care professionals, promoting disease prevention and treatment programs that limit the spread of communicable diseases, b. Reduce the incidence and effect of noncommunicable diseases and c. Strengthening Oral Health Care systems. Kantipur Dental College Teaching Hospital & Research Center (KDCTHRC) is continuing monitoring the progress and providing oral and dental health care services like oral screening, extraction, scaling, restoration efforts periodically in the specific areas covered by the GG of The Rotary Foundation and also in different communities and institutions with the support of local Rotarians and communities.
                  </>
                }
              />

              <ProfileSection
                number="20"
                content={
                  <>
                    From <strong>RY 2022-23</strong>, the club has adopted <strong>22 girl students</strong> of primary level of <strong>Sri Kulmaya Bhagawati Lower Secondary School</strong>, Suryabinayak Municipality – 1, Biruwa, Bhaktapur District with the objective of Happy School theme of Rotary Nepal Literary Mission of our Rotary District -3292 Nepal-Bhutan. The club will be continuing sponsoring the students for three years by providing school uniforms/bags and stationary items. The club will also organize oral/dental health checkup programs and appropriate advocacy sessions to the teachers and all students of this school.
                  </>
                }
              />

              <ProfileSection
                number="21"
                title="RY 2023-24"
                content={
                  <>
                    The club initiated the <strong>&quot;Give A Smile&quot;</strong> project. Project Objective – To address and mitigate oral health problems of the young students. The activities include Oral Screenings, Simple Extraction of Teeth, Distribution of Toothbrushes and Toothpastes, Advocacy on the Importance of Oral Health Care. Project cost – About <strong>Rs 6 lakh</strong>. Project Funders – Rotary District 3292 financial support through District Development Fund, Rotary Club of Kathmandu North, The BM Foundation. Project Collaborator – Kantipur Dental Hospital and Research Center. Project Area – Various schools of Kathmandu Valley. Beneficiary – About <strong>30,000 young students</strong>.
                  </>
                }
              />

              <ProfileSection
                number="22"
                content={
                  <>
                    RCKN had sponsored to form <strong>2 Rotary Clubs</strong>, namely <strong>RC Charumati</strong>, covering Chabahil and Battisputali area (Charter date- 25Dec 2002, CP Rabin Lama, GSR Gopal Raj Pokhrel), and <strong>RC The Himalayan Gurkha Maharajganj</strong> (Charter date 10 Sep 2003, CP Gopal Bahadur Gurung, GSR Mingma Tsering Sherpa).
                  </>
                }
              />

              <ProfileSection
                number="23"
                content={
                  <>
                    RCKN has organized and sponsored <strong>four Rotaract Clubs(Rtrc)</strong> under its wing. Rtrc of Kathmandu North, a community based club (Charter date- 08 Jun 1999, CP Abhishek Shah) and 3 are institution based, namely Rtrc Reliance College, Chabahil (Charter date- 25 Oct 2007, CP Rajesh Kafle), RtrC Kathmandu Medical College, Sinamangal (Charter date- 25 Oct 2007, CP Dr.Nitin Nischal Bhandari) and RtrC Kantipur Dental Hospital, Basundhara (Charter date- 30 Nov 2009 CP Dr Krishna Poudel). It has also sponsored one <strong>Interact Club of Orient A level</strong> (Charter date – 24 Dec 2018, CP Anish Moktan Tamang). The club has organized and sponsored <strong>two Rotary Community Corps (RCC)</strong>, namely RCC Sundarijal (Charter date 16 Apr 2007) and RCC Kageshwori Manohara. Both RCCs cover suburban locations of NE Kathmandu District.
                  </>
                }
              />

              <ProfileSection
                number="24"
                content={
                  <>
                    The club is formally registered as a non-profit motive service organization in <strong>Kathmandu District Administrative Office, Social Welfare Council, Kathmandu</strong> and holds ownership of permanent property at <strong>Sundarijal, Kathmandu</strong>.
                  </>
                }
              />

              <ProfileSection
                number="25"
                content={
                  <>
                    Past Presidents of this club have been representing the club at the District and are assigned in responsible leadership positions to serve at the District level in <strong>Rotary District 3292 Nepal and Bhutan</strong>. They have thus contributed to the Rotary movement in Nepal and also have inspired the club to expand its leadership beyond the club level.
                  </>
                }
              />

              <ProfileSection
                number="26"
                content={
                  <>
                    The club is composed of about <strong>40 active members</strong>. The average age of the members is <strong>45</strong>. Although the club started with relatively aged professionals, in recent years, young professionals and entrepreneurs have joined the club. These young professionals would be instrumental in making the club effective in its community service initiatives as well as leading the club in a more qualified manner. It is further emphasizes that the training and mentoring newer members is important, which prepares the members to be aware of Rotary values, the nature of resources available to carry out community services, application of individual&apos;s professional knowledge and enhance leadership skill in order to provide selfless service to the less fortunate and deprived fellow human being as a committed Rotarian. So newer active members are encouraged to interact more in the club proceedings, club activities and participate in various workshops, seminars, conferences organized by other clubs, Districts and by the RI through the year.
                  </>
                }
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

/* ---------------------------------------------------------- */
type GoalSectionProps = {
  title: string;
  img: string;
  pdf: string;
  data: { category: string; points: string[] }[];
  hoverTitle: string;
};

function GoalSection({ title, img, pdf, data, hoverTitle }: GoalSectionProps) {
  return (
    <Card className="card-glass overflow-hidden mt-10">
      <div className="grid md:grid-cols-12 gap-0">
        {/* Image */}
        <div className="md:col-span-4 relative overflow-hidden">
          <div className="aspect-[3/4] relative">
            <Image
              src={img}
              alt={title}
              fill
              className="img-hover-zoom object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-lg font-bold">{hoverTitle}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-8 flex flex-col">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[rgb(var(--border))]">
            <CardTitle className="text-2xl font-bold">
              {title}
            </CardTitle>
            <Link
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download PDF
            </Link>
          </CardHeader>

          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {data.map(({ category, points }, idx) => (
                <AccordionItem
                  key={idx}
                  value={category}
                  className="border-[rgb(var(--border))]"
                >
                  <AccordionTrigger className="text-base font-semibold text-[rgb(var(--brand-blue))]">
                    {category}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-outside space-y-1 pl-5 text-sm text-[rgb(var(--text-secondary))]">
                      {points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-[rgb(var(--text-secondary))]">{label}</span>
      <span className="font-semibold text-[rgb(var(--brand-blue))]">
        {value}
      </span>
    </div>
  );
}

function ProfileSection({ 
  number, 
  title, 
  content 
}: { 
  number: string; 
  title?: string; 
  content: React.ReactNode;
}) {
  return (
    <div className="mb-8 pb-8 border-b border-[rgb(var(--border))] last:border-b-0">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgb(var(--brand-blue))] text-white flex items-center justify-center font-bold text-lg">
          {number}
        </div>
        <div className="flex-1">
          {title && (
            <h3 className="text-xl font-bold text-[rgb(var(--brand-blue))] mb-3">
              {title}
            </h3>
          )}
          <div className="text-[rgb(var(--text-secondary))] leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
const riGoals = [
  {
    category: "Create Lasting Change",
    points: [
      "Execute 35,000+ service projects worldwide.",
      "Expand reach to 120 countries via new & existing programs.",
      "Focus on the seven Areas of Focus with measurable outcomes.",
    ],
  },
  {
    category: "Grow & Diversify Membership",
    points: [
      "Net growth of 300,000 Rotary & Rotaract members.",
      "Achieve 50 % female representation in every district.",
      "Strengthen Rotaract-to-Rotary transition pathways.",
    ],
  },
  {
    category: "Fund the Future",
    points: [
      "Raise US $400 million for the Annual Fund.",
      "Secure US $150 million for PolioPlus.",
      "Double Endowment Fund to US $2.5 billion.",
    ],
  },
];

const districtGoals = [
  {
    category: "Administrative",
    points: [
      "100 % My-Rotary enrolment",
      "Review & refresh club bylaws and budgets",
      "Every club to adopt a 3-year strategic plan",
    ],
  },
  {
    category: "Membership",
    points: [
      "Net +300 members (focus on women & youth)",
      "Charter 5 new satellite/cause-based clubs",
      "90 % member retention via mentorship & engagement",
    ],
  },
  {
    category: "Service Projects",
    points: [
      "Launch 30 new Global Grant projects",
      "Provide 2,000 cataract surgeries & 20k reading glasses",
      "Plant 50,000 trees on 26 Jul 2025",
      "Introduce electric-cooking to 10,000 marginalized households",
    ],
  },
  {
    category: "Public Image",
    points: [
      "Consistent Rotary branding at every event & project site",
      "Quarterly district-wide social-media campaigns",
      "Four regional marathons / walkathons",
    ],
  },
  {
    category: "The Rotary Foundation",
    points: [
      "Annual giving target US $550,000",
      "End Polio contribution US $25,000",
      "Increase PHF, PHS, Major Donors by 20 %",
    ],
  },
];

const presidentGoals = [
  {
    category: "Club Membership",
    points: [
      "Recruit 20 new members (50 % women, 50 % under 35)",
      "Launch quarterly \"Bring-a-Friend\" initiatives",
      "Achieve 95 % attendance & retention",
    ],
  },
  {
    category: "Service Impact",
    points: [
      "Complete 5 signature projects aligned with district grants",
      "Adopt one local school for e-learning & sanitation upgrades",
      "Sponsor two international Global Grant partnerships",
    ],
  },
  {
    category: "Public Image & Branding",
    points: [
      "Redesign club website & social channels",
      "Monthly press releases and TV coverage",
      "Host an open-day for local influencers & media",
    ],
  },
  {
    category: "Fellowship & Fundraising",
    points: [
      "Organize four family-friendly fellowship events",
      "Raise US $15,000 for Annual Fund & US $5,000 for PolioPlus",
      'Introduce "Rotary Movie Night" fundraiser series',
    ],
  },
];

const areasOfFocus = [
  {
    title: "Promoting Peace",
    icon: <Heart className="h-6 w-6 text-red-500" />,
    description: "We work to resolve conflicts and promote international understanding, goodwill, and peace."
  },
  {
    title: "Fighting Disease",
    icon: <Heart className="h-6 w-6 text-red-500" />,
    description: "We improve access to affordable and culturally sensitive health care in underserved areas."
  },
  {
    title: "Providing Clean Water",
    icon: <Globe className="h-6 w-6 text-blue-500" />,
    description: "We support solutions that bring safe water and sanitation to communities worldwide."
  },
  {
    title: "Saving Mothers & Children",
    icon: <Heart className="h-6 w-6 text-pink-500" />,
    description: "We expand access to quality care so mothers and children everywhere can have the same opportunities for a healthy future."
  },
  {
    title: "Supporting Education",
    icon: <Users className="h-6 w-6 text-green-500" />,
    description: "We strengthen the capacity of communities to support basic education and literacy."
  },
  {
    title: "Growing Local Economies",
    icon: <Award className="h-6 w-6 text-yellow-500" />,
    description: "We create opportunities for community members to develop their own solutions to local economic problems."
  },
  {
    title: "Protecting Environment",
    icon: <Globe className="h-6 w-6 text-green-500" />,
    description: "We support activities that strengthen the conservation and protection of natural resources."
  }
];