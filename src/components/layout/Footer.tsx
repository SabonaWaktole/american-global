import Link from "next/link";
import { contact, footerLinks, siteConfig } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const links = [...footerLinks.company, ...footerLinks.resources];

  return (
    <footer className="bg-gradient-footer py-8">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center text-xs text-ink-muted sm:flex-row sm:justify-between sm:text-left">
          <p>
            &copy; {currentYear} {siteConfig.legalName}
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p>{contact.email}</p>
        </div>
      </Container>
    </footer>
  );
}
