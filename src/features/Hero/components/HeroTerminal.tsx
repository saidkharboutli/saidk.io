import React from 'react';
import Typed from 'typed.js';

const HeroTerminal = () => {
  React.useEffect(() => {
    const typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex size-full items-center justify-center">
      <div id="typed-strings" className="invisible">
        <p className="">
          `<span className="font-bold text-primary">~</span> `^1250 echo{' '}
          <span className="font-bold text-primary">$CURRENTLY</span>
          <br />
          `Software engineer/PM working for{' '}
          <a
            className="font-bold text-pyyne hover:underline"
            href="https://www.pyyne.com"
          >
            PYYNE Digital
          </a>{' '}
          &{' '}
          <a
            className="font-bold text-inveterate hover:underline"
            href="https://www.inveterate.com"
          >
            Inveterate
          </a>
          .`
          <br />`<span className="font-bold text-primary">~</span> `^600 echo{' '}
          <span className="font-bold text-primary">$PREVIOUSLY</span>
          <br />
          `Machine learning solutions (CV & NLP) for{' '}
          <a
            className="font-bold text-amber-500 hover:underline"
            href="https://www.socom.mil/"
          >
            USSOCOM
          </a>
          .`
          <br />`<span className="font-bold text-primary">~</span> `^700 echo{' '}
          <span className="font-bold text-primary">$HOBBIES</span>
          <br />
          `Tech, Cars, Video Games, and Weightlifting.`
          <br />`<span className="font-bold text-primary">~</span> `
        </p>
      </div>

      <div className="size-full rounded-lg bg-black font-mono ">
        <header className="rounded-t-lg bg-[#555] py-0.5 text-center md:py-0">
          visitor@saidk.io
        </header>
        <div className="p-4 text-left text-xl">
          <span id="typed" />
        </div>
      </div>
    </div>
  );
};

export { HeroTerminal };
