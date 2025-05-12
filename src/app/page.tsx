
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Analytics Dashboard",
    description: "Visualize and monitor activity, usage, and trends across your account.",
    image: "https://images.pexels.com/photos/669365/pexels-photo-669365.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/analytics"
  },
  {
    title: "Compliance Workflows",
    description: "Manage user consent, audit logs, and regulatory requirements.",
    image: "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/compliance"
  },
  {
    title: "Instruments",
    description: "Explore and manage connected instruments and integrations.",
    image: "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/instruments"
  }
];

function OnboardingSegment() {
  // Placeholder for onboarding segmentation logic
  // In real use, fetch user profile or onboarding state
  // For demo, we show a simple welcome
  return (
    <section className="mb-8">
      <div className="p-6 md:p-8 rounded-lg bg-gradient-to-br from-primary/10 via-white to-secondary/10 shadow-md flex flex-col md:flex-row items-center gap-6">
        <Image
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Welcome onboarding"
          width={160}
          height={120}
          className="rounded-lg border shadow-md"
          unoptimized
        />
        <div>
          <h2 className="text-xl font-bold mb-2">Welcome to CorePlatform</h2>
          <p className="mb-1">Get started by exploring analytics, reviewing compliance, or connecting your first instrument.</p>
          <p className="text-sm text-muted-foreground">Tip: Your progress will be saved as you go.</p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <OnboardingSegment />
      <section className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <Link
            key={feature.title}
            href={feature.link}
            className="group rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col"
          >
            <div className="relative w-full aspect-[3/2] overflow-hidden rounded-t-xl">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-muted-foreground mb-2 flex-1">{feature.description}</p>
              <span className="text-primary font-medium text-sm mt-auto group-hover:underline">Go to {feature.title}</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
