import { ReactComponent as AMLogo } from "./icons/am_logo.svg";
import { ReactComponent as GithubLogo } from "./icons/github_logo.svg";


const Footer = () => {
    return (
        <footer className="p-4 w-full flex justify-center items-center gap-2 text-gray-300 bg-slate-800">
                <span>Made by</span>
                <a className="text-center" href="https://www.achrafmansari.com/"><AMLogo className="w-5 h-5"/></a>
                <span>and stored on</span>
                <a className="text-center" href="https://github.com/itsachrafmansari/fpk-biblio/"><GithubLogo className="w-5 h-5"/></a>
        </footer>
    );
}

export default Footer;
