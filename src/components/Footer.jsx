import { HiHeart } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer>
      <span className="footer-text">Made with&nbsp;</span>
      <span className="heart-icon">
        <HiHeart className="heart-icon" />
      </span>
      <span className="footer-text">&nbsp;by&nbsp;</span>
      <a
        className="footer-text--copy"
        href="https://github.com/ese-varo"
        target="_blank"
        rel="noreferrer"
      >
        @ese-varo
      </a>
    </footer>
  );
};

export default Footer;
