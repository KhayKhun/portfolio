import {
  CodeIcon,
  FileDownloadIcon,
  GithubIcon,
  LeetcodeIcon,
  LinkedinIcon,
  XIcon,
} from "../assets/Icons";

const NavBar = () => {
  return (
    <>
      <div className="z-10 fixed gap-3 text-2xl flex sm:left-auto sm:bottom-auto sm:right-0 sm:flex-col sm:top-[50%] sm:-translate-y-[50%] sm:translate-x-0 sm:rounded-r-none sm:border-r-0 sm:border-b-[0.1px] bg-white bg-opacity-10 p-2 sm:rounded-l-md border-[0.1px] border-cyan-300 text-cyan-400 left-[50%] bottom-0 -translate-x-[50%] border-b-0 rounded-t-md">
        <div>
          <GithubIcon />
        </div>
        <div>
          <LinkedinIcon />
        </div>
        <div>
          <XIcon />
        </div>
        <div>
          <LeetcodeIcon />
        </div>
        <div>
          <CodeIcon />
        </div>
      </div>
      <div className="z-10 fixed text-2xl gap-2 flex sm:left-0 sm:-translate-x-[40%] sm:top-[50%] sm:-translate-y-[50%] sm:border-b-0 bg-white bg-opacity-10 p-2 sm:rounded-t-md sm:border-[0.1px] border-cyan-300 text-cyan-400 sm:rotate-90 top-0 left-[50%] -translate-x-[50%] border-t-0 rounded-b-md border-[0.1px]">
        <FileDownloadIcon />
        <span className="text-base">Download CV</span>
      </div>
    </>
  );
};

export default NavBar;
