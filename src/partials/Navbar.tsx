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
        <NavMenuItem href="/projects/">Projects</NavMenuItem>
        <NavMenuItem href="/reviews/">Reviews</NavMenuItem>
        <NavMenuItem href="/about-me/">Me</NavMenuItem>
        <NavMenuItem href="/">Portfolio</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
