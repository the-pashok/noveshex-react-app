import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../components/Container';
import { LegalContent } from '../components/LegalContent';
import { LegalSidebar } from '../components/LegalSidebar';
import { legalPages } from '../data/siteData';
import { NotFoundPage } from './NotFoundPage';

export function LegalPage() {
  const { slug } = useParams();

  const page = useMemo(() => legalPages[slug], [slug]);

  if (!page) {
    return <NotFoundPage />;
  }

  return (
    <section className="section legal-page">
      <Container className="legal-page__grid">
        <LegalSidebar />
        <LegalContent page={page} />
      </Container>
    </section>
  );
}
