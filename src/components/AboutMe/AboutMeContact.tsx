import emailjs from '@emailjs/browser';
import React, { useEffect, useRef } from 'react';

import { GradientText } from '../GradientText';
import { Section } from '../Section';

const AboutMeContact = () => {
  const form = useRef<HTMLFormElement>();

  const [showPopup, setShowPopup] = React.useState(false);
  const [animateContents, setAnimateContents] = React.useState(false);
  const [sending, setSending] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateContents(showPopup);
    }, 10);
  }, [showPopup]);

  const handleSubmit = (e: React.FormEvent) => {
    const serviceId = 'contact-saidk';
    const templateId = 'template_4akaltp';
    const publicKey = 'PPTQzYEGERUyGNf3B';

    e.preventDefault();

    setSending(true);
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        form.current.reset();
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
        setTimeout(() => {
          setAnimateContents(false);
          setSending(false);
        }, 1800);
      },
      (error) => {
        setSending(false);
        console.log(error.text);
      },
    );
  };

  return (
    <Section>
      <div className="my-4 flex w-full">
        <div className="flex w-full flex-col text-center">
          <h1 className="mb-2 text-2xl font-bold">
            <GradientText>Contact Me</GradientText>
          </h1>
          <p className="text-cod-400">
            Interested in working with PYYNE? Have a question about one of my
            projects? Reach me below!
          </p>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <form
          onSubmit={handleSubmit}
          ref={form}
          className="flex flex-col gap-6 md:w-2/3"
        >
          <div className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-8">
            <div className="w-full">
              <label className="mb-2 font-semibold">Name</label>
              <input
                type="text"
                name="from_name"
                className="w-full rounded-md border border-gray-300 bg-cod-900 px-4 py-2 focus:bg-cod-800"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="w-full rounded-md border border-gray-300 bg-cod-900 px-4 py-2 focus:bg-cod-800"
                required
              />
            </div>
          </div>
          <div className="">
            <label className="mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              className="w-full rounded-md border border-gray-300 bg-cod-900 px-4 py-2 focus:bg-cod-800"
              required
            />
          </div>
          <div className="invisible" id="g-recaptcha-response"></div>
          <button
            type="submit"
            id="submit-button"
            className="self-center rounded-md bg-[#BB86FC] px-4 py-2 text-cod-950 transition-all duration-200 hover:scale-110"
          >
            {sending ? 'Sending...' : 'Submit'}
          </button>
        </form>
        {showPopup && (
          <div
            className={`fixed left-0 top-0 flex size-full items-center justify-center bg-black ${animateContents ? 'opacity-75' : 'opacity-0'} transition-opacity duration-100`}
            onClick={() => {
              setShowPopup(false);
              setSending(false);
            }}
          >
            <div
              className={`rounded bg-cod-800 p-4 text-center transition-all duration-200 ${animateContents ? 'translate-y-0' : '-translate-y-4'} `}
            >
              <h2 className="mb-2 text-2xl">
                <GradientText>Success!</GradientText>
              </h2>
              <p>
                Successfully submitted. <br />
                I'll get back to you as soon as possible!
              </p>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export { AboutMeContact };
