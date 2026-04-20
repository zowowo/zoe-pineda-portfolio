import { motion } from "framer-motion";

const certifications = [
  {
    name: "CompTIA IT Fundamentals+ (ITF+)",
    issuer: "CompTIA",
    date: "June 2024",
    link: "https://www.credly.com/badges/9cfa5cfc-cd22-4bcf-8f56-cd480a7fc8d5/linked_in_profile",
  },
  {
    name: "AWS Academy Graduate",
    issuer: "AWS Cloud Foundations",
    date: "Nov 2023",
    link: "https://www.credly.com/badges/c7ec80c2-40da-4510-9c4f-5b23354f4c83/linked_in_profile",
  },
  {
    name: "Google Cloud Essentials",
    issuer: "Google",
    date: "Nov 2023",
    link: "https://www.cloudskillsboost.google/public_profiles/2d12ee51-9b3d-4909-b3a3-7ccf1eeca97b/badges/5014407?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Data Analyst with Python",
    issuer: "Datacamp",
    date: "Jun 2024",
    link: "https://www.datacamp.com/statement-of-accomplishment/track/5848df0d423cec13050f86e0b4ec7adce7f576e0?raw=1",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4, ease: "easeOut" }}
              className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border hover:border-primary/40 transition-colors duration-200"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-primary/8 rounded-md shrink-0 mt-0.5">
                <span className="text-primary text-sm font-semibold">{cert.issuer.charAt(0)}</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">{cert.name}</p>
                <p className="text-sm text-muted-foreground">{cert.issuer} &middot; {cert.date}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
