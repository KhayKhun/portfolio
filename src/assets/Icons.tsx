import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { HiCode } from "react-icons/hi";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { LuFileDown } from "react-icons/lu";
import { FaFacebookSquare } from "react-icons/fa";
export const PersonIcon = (props : any) => <PiPersonArmsSpreadFill {...props}/>
export const CodeIcon = (props: any) => <HiCode {...props} />;
export const LinkedinIcon = (props: any) => <IoLogoLinkedin {...props} />;
export const GithubIcon = (props: any) => <IoLogoGithub {...props} />;
export const LeetcodeIcon = (props: any) => <SiLeetcode {...props} />;
export const FacebookIcon = (props: any) => <FaFacebookSquare {...props} />;
export const XIcon = (props: any) => <FaXTwitter {...props} />;
export const FileDownloadIcon = (props: any) => <LuFileDown {...props} />;