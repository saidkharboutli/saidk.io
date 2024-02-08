import emailjs from '@emailjs/browser';
import React, { useEffect } from 'react';
import Reaptcha from 'reaptcha';

import { GradientText } from '../GradientText';
import { Section } from '../Section';

const AboutMeContact = () => {
  const form = React.useRef<HTMLFormElement>();
  const recaptcha = React.createRef<Reaptcha>();

  const [showPopup, setShowPopup] = React.useState(false);
  const [animateContents, setAnimateContents] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [failedSend, setFailedSend] = React.useState(false);

  /*
    For pop-up animation.
  */
  useEffect(() => {
    setTimeout(() => {
      setAnimateContents(showPopup);
    }, 10);
  }, [showPopup]);

  /*
    For send timeout (if user clicks off of reaptcha).
  */
  useEffect(() => {
    if (showPopup || !sending) return;
    setTimeout(() => {
      setSending(false);
    }, 8000);
  }, [sending]);

  /* 
    Verified humans, send email.
  */
  const onRecaptchaVerify = () => {
    /* In case user took very long to finish recaptcha */
    if (!sending) setSending(true);

    const serviceId = 'contact-saidk';
    const templateId = 'template_4akaltp';
    const publicKey = 'PPTQzYEGERUyGNf3B';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        /* successful send */
        setShowPopup(true);
        setTimeout(() => {
          setSending(false);
          setShowPopup(false);
          form.current.reset();
        }, 4000);

        /* start ease out animation */
        setTimeout(() => {
          setAnimateContents(false);
        }, 3500);
      },
      () => {
        /* failed send */
        setFailedSend(true);
        setShowPopup(true);
        setTimeout(() => {
          setFailedSend(false);
          setShowPopup(false);
          setSending(false);
        }, 4000);
        setTimeout(() => {
          setAnimateContents(false);
        }, 3800);
      },
    );
  };

  /* 
    Could not verify human, recaptcha failed, robot
  */
  const onRecaptchaError = () => {
    setFailedSend(true);
    setTimeout(() => {
      setSending(false);
      setFailedSend(false);
    }, 3000);
    form.current.reset();
  };

  /*
    Run recaptcha verification on form submit.
  */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await recaptcha.current.execute();
  };

  return (
    <Section>
      <div className="my-4 flex w-full">
        <div className="flex w-full flex-col text-center">
          <h1 className="mb-2 text-2xl font-bold">
            <GradientText>Contact Me</GradientText>
          </h1>
          <p className="text-cod-200">
            Interested in working with PYYNE? Have a question about one of my
            projects? Reach me below!
          </p>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <form
          onSubmit={handleSubmit}
          ref={form}
          className="flex flex-col gap-5 md:w-2/3"
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
            <div className="pt-2 text-sm text-cod-400">
              This site is protected by reCAPTCHA and the Google{' '}
              <a
                className="underline"
                href="https://policies.google.com/privacy"
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a className="underline" href="https://policies.google.com/terms">
                Terms of Service
              </a>{' '}
              apply.
            </div>
          </div>
          <div className="invisible">
            <Reaptcha
              ref={recaptcha}
              sitekey="6LcH2GYpAAAAAPoTzQma2i8R5wn2e5CNySqP-n5c"
              onVerify={onRecaptchaVerify}
              onError={onRecaptchaError}
              size="invisible"
              theme="dark"
            />
          </div>
          <button
            type="submit"
            id="submit-button"
            className="self-center rounded-md bg-primary px-6 py-2 text-cod-950 transition-all duration-200 hover:scale-110"
            onClick={() => recaptcha.current.reset()}
            disabled={sending}
          >
            {/* Confusing mess, probably should clarify. */}
            {sending
              ? `${showPopup && !failedSend ? 'Sent!' : `${failedSend ? 'Failed!' : 'Sending...'}`}`
              : 'Send'}
          </button>
        </form>
        {showPopup && (
          <div
            className={`fixed left-0 top-0 flex size-full items-center justify-center bg-black ${animateContents ? 'opacity-75' : 'opacity-0'} transition-opacity duration-300`}
            onClick={() => {
              /* User clicked off the popup */
              setAnimateContents(false);
              setSending(false);
              setFailedSend(false);
              form.current.reset();
              setTimeout(() => {
                setShowPopup(false);
              }, 500);
            }}
          >
            <div
              className={`rounded bg-cod-800 p-4 text-center transition-all duration-500 ${animateContents ? 'translate-y-0' : '-translate-y-4'} `}
            >
              {failedSend ? (
                <div>
                  <h2 className="mb-2 text-2xl">
                    <GradientText>Failed :(</GradientText>
                  </h2>
                  <p>
                    Failed to send! <br />
                    EmailJS failed. Try again soon!
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="mb-2 text-2xl">
                    <GradientText>Success!</GradientText>
                  </h2>

                  <p>
                    Successfully submitted. <br />
                    I'll get back to you as soon as possible!
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export { AboutMeContact };
