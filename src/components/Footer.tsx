import Facebook from "../assets/svg/Facebook";
import Github from "../assets/svg/Github";
import Instagram from "../assets/svg/Instagram";
import Linkedin from "../assets/svg/Linkedin";
import Twitter from "../assets/svg/Twitter";
import Contact from "./Contact";
import Email from "../assets/svg/Email";
import House from "../assets/svg/House";
import Phone from "../assets/svg/Phone";
import SocialButton from "./SocialButton";

const styles = {
  footer:
    "bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left",
  footerBorder:
    "flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between",
  footerBorderHidden: "mr-12 hidden lg:block",
  footerBorderHiddenSpan:
    "mb-4 flex justify-center font-semibold uppercase md:justify-start",
  socialSvg: "w-4 h-4",
};

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
            <Facebook className={styles.socialSvg} height={20} width={20} />
          </SocialButton>
          <SocialButton
            href="https://twitter.com/ivan_hribernik"
            color="#1da1f2"
          >
            <Twitter className={styles.socialSvg} height={20} width={20} />
          </SocialButton>
          <SocialButton
            href="https://www.instagram.com/ivanhribernik89"
            color="#c13584"
          >
            <Instagram className={styles.socialSvg} height={20} width={20} />
          </SocialButton>
          <SocialButton href="https://www.github.com/ihribernik" color="#333">
            <Github className={styles.socialSvg} height={20} width={20} />
          </SocialButton>
          <SocialButton
            href="https://www.https://www.linkedin.com/in/claudio-ivan-hribernik-492255b8"
            color="#0077b5"
          >
            <Linkedin className={styles.socialSvg} height={20} width={20} />
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
              <House className="mr-3 h-5 w-5" height={20} width={20} />
              Buenos Aires, Argentina
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <Email className="mr-3 h-5 w-5" height={20} width={20} />
              cihribernik@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <Phone className="mr-3 h-5 w-5" height={20} width={20} />+ 54 9 11
              3900 3721
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
