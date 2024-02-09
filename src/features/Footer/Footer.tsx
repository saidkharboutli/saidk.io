import { FooterCopyright } from '@/features/Footer/components/FooterCopyright';
import { Section } from '@/features/shared/Section';
import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.site_name} />
  </Section>
);

export { Footer };
