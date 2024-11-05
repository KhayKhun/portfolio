import {
  CodeIcon,
  FacebookIcon,
  FileDownloadIcon,
  GithubIcon,
  LeetcodeIcon,
  LinkedinIcon,
  XIcon,
} from "../assets/Icons";

const FixedContents = () => {
  return (
    <div className="text-2xl xl:text-3xl 2xl:text-4xl text-cyan-400">
      <div className=" z-10 fixed gap-3 flex right-0 flex-col top-[50%] -translate-y-[50%] rounded-r-none bg-white bg-opacity-10 p-3 rounded-l-md border-[0.1px] border-cyan-300 border-r-0">
        <a
          className="relative"
          href="https://github.com/KhayKhun"
          target="blank"
        >
          <div className="absolute w-full h-full top-0 left-0 bg-cyan-400 hover:animate-ping rounded-full opacity-0 hover:opacity-100" />
          <GithubIcon />
        </a>
        <a
          className="relative"
          href="https://www.linkedin.com/in/khaykhun/"
          target="blank"
        >
          <div className="absolute w-full h-full top-0 left-0 bg-cyan-400 hover:animate-ping rounded-full opacity-0 hover:opacity-100" />
          <LinkedinIcon />
        </a>
        <a
          className="relative"
          href="https://twitter.com/KhayKhun225"
          target="blank"
        >
          <div className="absolute w-full h-full top-0 left-0 bg-cyan-400 hover:animate-ping rounded-full opacity-0 hover:opacity-100" />
          <XIcon />
        </a>
        <a
          className="relative"
          href="https://leetcode.com/KhayKhun/"
          target="blank"
        >
          <div className="absolute w-full h-full top-0 left-0 bg-cyan-400 hover:animate-ping rounded-full opacity-0 hover:opacity-100" />
          <LeetcodeIcon />
        </a>
        <a
          className="relative"
          href="https://www.facebook.com/simpleyourweb"
          target="blank"
        >
          <div className="absolute w-full h-full top-0 left-0 bg-cyan-400 animate-ping rounded-full opacity-100" />
          <FacebookIcon />
        </a>
      </div>
      <div className="fixed bottom-3 right-3 z-10 text-sm text-amber-500">
        <a
          className="flex items-center gap-2"
          href="https://github.com/KhayKhun/portfolio"
          target="blank"
        >
          <CodeIcon />
          Source code
        </a>
      </div>
    </div>
  );
};

export default FixedContents;
