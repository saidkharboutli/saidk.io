import { GradientText } from '@/features/shared/GradientText';
import { Newsletter } from '@/features/shared/Newsletter';
import { Section } from '@/features/shared/Section';

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
