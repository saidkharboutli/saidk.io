import { FooterCopyright } from '@/components/Footer/FooterCopyright';
import { Section } from '@/components/Section';
import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.site_name} />
  </Section>
);

export { Footer };
