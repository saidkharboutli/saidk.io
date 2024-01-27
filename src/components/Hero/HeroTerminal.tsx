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
    <div className="flex h-full w-full items-center justify-center">
      <div id="typed-strings">
        <p className="">
          `<span className="font-bold text-[#BB86FC]">~</span> `^1000 echo{' '}
          <span className="font-bold text-[#BB86FC]">$CURRENTLY</span>
          <br />
          `Software engineer/PM working for{' '}
          <a
            className="font-bold text-[#85AC6C] hover:underline"
            href="https://www.pyyne.com"
          >
            PYYNE Digital
          </a>{' '}
          &{' '}
          <a
            className="font-bold text-violet-400 hover:underline"
            href="https://www.inveterate.com"
          >
            Inveterate
          </a>
          .`
          <br />`<span className="font-bold text-[#BB86FC]">~</span> `^300 echo{' '}
          <span className="font-bold text-[#BB86FC]">$PREVIOUSLY</span>
          <br />
          `Machine learning solutions (CV & NLP) for{' '}
          <a
            className="font-bold text-amber-500 hover:underline"
            href="https://www.socom.mil/"
          >
            USSOCOM
          </a>
          .`
          <br />`<span className="font-bold text-[#BB86FC]">~</span> `^700 echo{' '}
          <span className="font-bold text-[#BB86FC]">$HOBBIES</span>
          <br />
          `Tech, Cars, Video Games, and Weightlifting.`
          <br />`<span className="font-bold text-[#BB86FC]">~</span> `
        </p>
      </div>

      <div className="h-full w-full rounded-lg bg-black font-mono ">
        <header className="rounded-t-lg bg-[#555] text-center">
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
