import { Logo } from '@/features/Navbar/components/Logo';
import { NavbarTwoColumns } from '@/features/Navbar/components/NavbarTwoColumns';
import { NavMenu } from '@/features/Navbar/components/NavMenu';
import { NavMenuItem } from '@/features/Navbar/components/NavMenuItem';
import { GradientText } from '@/features/shared/GradientText';

const Navbar = () => (
  <div className="sticky top-0 z-30 mx-auto mb-3 w-full overflow-hidden rounded-b-md bg-cod-900/90 px-8 py-3 md:relative md:max-w-screen-lg md:bg-transparent md:px-3 md:py-6 4k:max-w-screen-xl">
    <div className="mx-auto max-w-screen-lg">
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
    </div>
  </div>
);

export { Navbar };
