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
          icon={<img className="mr-2 w-10" src="/favicon.ico"></img>}
          name={<GradientText>Sa'id Kharboutli</GradientText>}
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </NavMenuItem>
        <NavMenuItem href="/blog/">Blog</NavMenuItem>
        <NavMenuItem href="/">Projects</NavMenuItem>
        <NavMenuItem href="/">About Me</NavMenuItem>
        <NavMenuItem href="/">Portfolio</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
