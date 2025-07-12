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
              global initiatives, we uphold Rotary’s highest ethical standards
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
            pdf="downloads/District Goals 2025-26, RID 3292.pdf"
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