import Facebook from "../assets/svg/Facebook";
import Github from "../assets/svg/Github";
import Instagram from "../assets/svg/Instagram";
import Linkedin from "../assets/svg/Linkedin";
import Twitter from "../assets/svg/Twitter";
import Contact from "./Contact";
import SocialButton from "./SocialButton";

const styles = {
  footer: "bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left",
  footerBorder: "flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between",
  footerBorderHidden: "mr-12 hidden lg:block",
  footerBorderHiddenSpan: "mb-4 flex justify-center font-semibold uppercase md:justify-start",
  socialSvg: "w-4 h-4",
}

const Footer = () => {
  const creationDate = new Date("2022-12-01").getFullYear();
  const currentDate = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerBorder}>
        <div className={styles.footerBorderHidden}>
          <span>Conéctate conmigo en las redes sociales:</span>
        </div>
        <div className=" lg:flex lg:justify-center">
          <SocialButton
            href="https://www.facebook.com/ivan.hribernik"
            color="#1877f2"
          >
            <Facebook className={styles.socialSvg} />
          </SocialButton>
          <SocialButton
            href="https://twitter.com/ivan_hribernik"
            color="#1da1f2"
          >
            <Twitter className={styles.socialSvg} />
          </SocialButton>
          <SocialButton
            href="https://www.instagram.com/ivanhribernik89"
            color="#c13584"
          >
            <Instagram className={styles.socialSvg} />
          </SocialButton>
          <SocialButton href="https://www.github.com/ihribernik" color="#333">
            <Github className={styles.socialSvg} />
          </SocialButton>
          <SocialButton
            href="https://www.https://www.linkedin.com/in/claudio-ivan-hribernik-492255b8"
            color="#0077b5"
          >
            <Linkedin className={styles.socialSvg} />
          </SocialButton>
        </div>
      </div>
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid gap-10 grid-cols-2">
          <div>
            <Contact />
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contacto
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              Buenos Aires, Argentina
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              cihribernik@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              + 54 9 11 3900 3721
            </p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>
          ©{" "}
          {currentDate >= creationDate ? (
            <>
              {creationDate} - {currentDate}{" "}
            </>
          ) : (
            <> {creationDate} </>
          )}
          Ivan Hribernik con ❤️. Desde Buenos Aires, Argentina 🇦🇷
        </span>
      </div>
    </footer>
  );
};
export default Footer;
