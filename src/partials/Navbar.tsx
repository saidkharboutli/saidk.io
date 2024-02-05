import { GradientText } from '@/components/GradientText';
import { Logo } from '@/components/Navbar/Logo';
import { NavbarTwoColumns } from '@/components/Navbar/NavbarTwoColumns';
import { NavMenu } from '@/components/Navbar/NavMenu';
import { NavMenuItem } from '@/components/Navbar/NavMenuItem';
import { Section } from '@/components/Section';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              className="mr-2 w-10 rounded-full"
              src="/images/site/profile_no_bg.png"
            ></img>
          }
          name={<GradientText>Sa'id Kharboutli</GradientText>}
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/blog/">Blog</NavMenuItem>
        <NavMenuItem href="/projects/">Projects</NavMenuItem>
        <NavMenuItem href="/reviews/">Reviews</NavMenuItem>
        <NavMenuItem href="/about-me/">Me</NavMenuItem>
        <NavMenuItem href="/resume/">Resume</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
