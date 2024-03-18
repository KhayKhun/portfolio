import {
  CodeIcon,
  FileDownloadIcon,
  GithubIcon,
  LeetcodeIcon,
  LinkedinIcon,
  XIcon,
} from "../assets/Icons";
// https://www.facebook.com/simpleyourweb
const NavBar = () => {
  return (
    <div className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl text-cyan-400">
      <div className=" z-10 fixed gap-3 flex sm:left-auto sm:bottom-auto sm:right-0 sm:flex-col sm:top-[50%] sm:-translate-y-[50%] sm:translate-x-0 sm:rounded-r-none sm:border-r-0 sm:border-b-[0.1px] bg-white bg-opacity-10 p-3 sm:rounded-l-md border-[0.1px] border-cyan-300 left-[50%] bottom-0 -translate-x-[50%] border-b-0 rounded-t-md">
        <a href="https://github.com/KhayKhun" target="blank">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/khaykhun/" target="blank">
          <LinkedinIcon />
        </a>
        <a href="https://twitter.com/KhayKhun225" target="blank">
          <XIcon />
        </a>
        <a href="https://leetcode.com/KhayKhun/" target="blank">
          <LeetcodeIcon />
        </a>
        <a href="https://github.com/KhayKhun/portfolio" target="blank">
          <CodeIcon />
        </a>
      </div>
      <a
        href="https://drive.google.com/uc?export=download&id=1vOcm6Mn3Y12KNhE1VC8A2CDPs3u6VB7E"
        className="z-10 fixed gap-2 flex sm:left-0 sm:-translate-x-[40%] sm:top-[50%] sm:-translate-y-[50%] sm:border-b-0 bg-white bg-opacity-10 p-2 sm:rounded-t-md sm:border-[0.1px] border-cyan-300 sm:rotate-90 top-0 left-[50%] -translate-x-[50%] border-t-0 rounded-b-md border-[0.1px]"
      >
        <FileDownloadIcon />
        <span className="text-sm sm:text-base md:text-lg xl:text-2xl 2xl:text-3xl">
          Download CV
        </span>
      </a>
    </div>
  );
};

export default NavBar;
