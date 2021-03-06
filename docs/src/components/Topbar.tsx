import { css, React } from "../deps.ts";
import { Hamburger } from "./Hamburger.tsx";

const headerRoot = css({
  height: "4rem",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 1.5rem",
  backgroundColor: "#EDF2F7",
});

const headerTitle = css({
  fontFamily: "'Rubik', sans-serif",
  fontSize: "1.75rem",
  color: "#4A5568",
  textDecoration: "none",
  ":hover": {
    color: "black",
  },
});

const headerLink = css({
  "& svg": {
    height: "1.5rem",
    width: "1.5rem",
    fill: "#4A5568",
    color: "#4A5568",
    ":hover": {
      fill: "black",
      color: "black",
    },
  },
});

const hideOnSmolView = css({
  display: "none",
  "@media": {
    "(min-width: 1000px)": {
      display: "block",
    },
  },
});

const hideOnLargeView = css({
  display: "block",
  "@media": {
    "(min-width: 1000px)": {
      display: "none",
    },
  },
});

type Props = {
  active?: string;
};

export function Topbar({ active }: Props) {
  return (
    <>
      <header className={headerRoot}>
        <a href="./index.html" className={headerTitle}>
          🦕📦 denopack
        </a>
        <GHLogo className={hideOnSmolView} />
        <div className={hideOnLargeView}>
          <Hamburger active={active} />
        </div>
      </header>
    </>
  );
}

export function GHLogo({ className }: { className?: string }) {
  return (
    <a
      className={`${headerLink}${!!className ? " " + className : ""}`}
      href="https://github.com/denofn/denopack"
      aria-label="denopack on GitHub"
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none">
        <g clip-path="url(githublogo)">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M8.18391.249268C3.82241.249268.253906 3.81777.253906 8.17927c0 3.46933 2.279874 6.44313 5.451874 7.53353.3965.0991.49563-.1983.49563-.3965v-1.3878c-2.18075.4956-2.67638-.9912-2.67638-.9912-.3965-.8922-.89212-1.1895-.89212-1.1895-.69388-.4957.09912-.4957.09912-.4957.793.0992 1.1895.793 1.1895.793.69388 1.2887 1.88338.8922 2.27988.6939.09912-.4956.29737-.8921.49562-1.0904-1.78425-.1982-3.5685-.8921-3.5685-3.96496 0-.89212.29738-1.586.793-2.08162-.09912-.19825-.3965-.99125.09913-2.08163 0 0 .69387-.19825 2.18075.793.59475-.19825 1.28862-.29737 1.9825-.29737.69387 0 1.38775.09912 1.98249.29737 1.4869-.99125 2.1808-.793 2.1808-.793.3965 1.09038.1982 1.88338.0991 2.08163.4956.59475.793 1.28862.793 2.08162 0 3.07286-1.8834 3.66766-3.66764 3.86586.29737.3965.59474.8921.59474 1.586v2.1808c0 .1982.0991.4956.5948.3965 3.172-1.0904 5.4518-4.0642 5.4518-7.53353-.0991-4.3615-3.6676-7.930002-8.02909-7.930002z"
            clip-rule="evenodd"
          ></path>
        </g>
        <defs>
          <clipPath id="githublogo">
            <path
              fill="transparent"
              d="M0 0h15.86v15.86H0z"
              transform="translate(.253906 .0493164)"
            ></path>
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}
