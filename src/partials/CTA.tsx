import { GradientText } from '@/components/GradientText';
import { Newsletter } from '@/components/Newsletter';
import { Section } from '@/components/Section';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Get post updates <GradientText>sent to your inbox!</GradientText>
        </>
      }
      description="No spam, just new posts!"
    />
  </Section>
);

export { CTA };
