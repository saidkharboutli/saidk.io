interface IAboutMeEducationProps {
  school: string;
  degree: string;
  year: string;
  minors: string[];
}

const AboutMeEducation = (props: IAboutMeEducationProps) => (
  <div className="flex flex-col items-center justify-center gap-4 overflow-hidden md:flex-row">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="186"
      height="219.38"
      viewBox="0 0 248 219.38"
    >
      <g>
        <path
          d="m0.83594 1.1133v41.139h16.352v135.11h-16.352v41.125h107.09v-41.125h-16.893v-51.74h25.93l32.584 51.74h-17.736v41.125h115.03v-41.125h-22.236l-39.623-60.162c28.721-11.672 43.316-29.876 43.316-54.145 0-17.603-6.991-31.946-21.43-43.834-14.824-12.032-34.966-18.109-59.896-18.109h-146.13zm90.191 41.137h32.799c10.396 0 18.35 2.7682 23.633 8.2188l0.08399 0.083984c1.753 1.7185 3.1314 3.7826 4.0469 6.0605 0.91499 2.2784 1.348 4.7216 1.2715 7.1758-0.0362 5.6793-2.4437 10.48-7.377 14.703-6.3651 4.9812-16.099 7.5078-28.877 7.5078h-25.58v-43.75z"
          fill="#000"
        />
        <path
          d="m176.39 114.38 3.4652-1.2996c28.757-10.829 42.739-27.217 42.739-50.078 0-15.823-6.3288-28.721-19.336-39.442-13.777-11.178-32.728-16.845-56.323-16.845h-140.43v29.864h16.352v146.43h-16.352v29.804h95.765v-29.804h-16.942v-63.085h34.713l39.706 63.085h-22.284v29.804h103.71v-29.804h-19.612zm-27.361-31.501-0.0725 0.06024c-7.3996 5.7758-18.301 8.7114-32.427 8.7114h-31.2v-55.072h38.503c12.033 0 21.333 3.357 27.674 9.9387 2.2879 2.2444 4.0903 4.9355 5.2947 7.9056 1.2049 2.9705 1.786 6.1563 1.7081 9.3605-0.0122 7.3879-3.2006 13.813-9.4815 19.095z"
          fill="#c03"
        />
      </g>
    </svg>
    <div className="flex flex-col gap-0.5">
      <div className="text-xl font-bold">{props.school}</div>
      <div className="text-lg">{props.degree}</div>
      <div className="text-base text-gray-400">{props.year}</div>
      <div className="text-base text-gray-400">
        Minors: {props.minors.join(', ')}
      </div>
    </div>
  </div>
);

export { AboutMeEducation };
