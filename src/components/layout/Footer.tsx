import Link from "next/link";
import { contact, siteConfig } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-fade-7 py-8">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center text-xs text-ink-muted sm:flex-row sm:justify-between sm:text-left">
          <p>
            &copy; {currentYear} {siteConfig.legalName}
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <Link href="#overview" className="transition-colors hover:text-ink">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="transition-colors hover:text-ink">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="transition-colors hover:text-ink">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <p>{contact.email}</p>
        </div>
      </Container>
    </footer>
  );
}
