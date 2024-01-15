import { GradientText } from '@/components/GradientText';
import { Logo } from '@/components/Logo';
import { NavbarTwoColumns } from '@/components/NavbarTwoColumns';
import { NavMenu } from '@/components/NavMenu';
import { NavMenuItem } from '@/components/NavMenuItem';
import { Section } from '@/components/Section';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={<img className="mr-2 w-10" src="/public/favicon.ico"></img>}
          name={<GradientText>Sa'id Kharboutli</GradientText>}
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blog</NavMenuItem>
        <NavMenuItem href="/">Projects</NavMenuItem>
        <NavMenuItem href="/">About Me</NavMenuItem>
        <NavMenuItem href="/">Portfolio</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
