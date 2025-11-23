import jsonp from 'jsonp';
import { type ReactNode, useRef, useState } from 'react';

type INewsletterProps = {
  title: ReactNode;
  description: ReactNode;
};

const Newsletter = (props: INewsletterProps) => {
  const form = useRef<HTMLFormElement>(null);

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('IDLE');

  /* Render the button text based on the status */
  const renderButtonStatus = (btnStatus: string) => {
    switch (btnStatus) {
      case 'SENDING':
        return 'Sending...';
      case 'ALREADY':
      case 'SENT':
        return 'Sent!';
      case 'ERROR':
        return 'Failed!';
      default:
        return 'Subscribe';
    }
  };

  /* Render the status text below the button based on the status */
  const renderStatusText = (btnStatus: string) => {
    switch (btnStatus) {
      case 'SENT':
        return 'Thanks for subscribing!';
      case 'ALREADY':
        return "You're already subscribed!";
      case 'ERROR':
        return 'If you are getting a fail message, try turning off advanced tracker blocking for this site only!';
      default:
        return '';
    }
  };

  /* On form submit, send the email to Mailchimp */
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus('SENDING');
    const url =
      'https://saidk.us14.list-manage.com/subscribe/post-json?u=874dbc621d36e7b7c00cbfd79&amp;id=0b5ccc3a77&amp;f_id=00fb97e0f0';
    jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (_, data) => {
      const { msg, result } = data;

      if (result === 'success' && msg.includes('already')) {
        setStatus('ALREADY');
      } else if (result === 'success') {
        setStatus('SENT');
      } else if (msg.includes('too many recent signup requests')) {
        setStatus('ALREADY');
      } else setStatus('ERROR');
    });

    /* Reset form and status after 5 seconds */
    setTimeout(() => {
      if (form.current) {
        form.current.reset();
        setStatus('IDLE');
      }
    }, 5000);
  };

  return (
    <div className="flex flex-col items-end justify-between gap-6 text-center sm:flex-row sm:text-left">
      <div className="sm:w-7/12">
        <div className="text-3xl font-bold">{props.title}</div>

        <p className="mt-3 text-gray-300">{props.description}</p>
      </div>

      <div className="w-full sm:w-5/12">
        <form
          ref={form}
          onSubmit={onSubmit}
          className="mb-1 flex rounded-full bg-cod-800 px-4 py-2 focus-within:ring-2 focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600"
        >
          <input
            name="email"
            type="email"
            className="w-full appearance-none bg-cod-800 focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          <button
            className="ml-2 shrink-0 rounded-full bg-gradient-to-br from-violet-600 to-violet-400 px-3 py-1 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
            type="submit"
            disabled={status !== 'IDLE'}
          >
            {renderButtonStatus(status)}
          </button>
        </form>
        <div className="h-2">
          <p className="px-4 text-left text-xs text-cod-300">{renderStatusText(status)}</p>
        </div>
      </div>
    </div>
  );
};
export { Newsletter };
