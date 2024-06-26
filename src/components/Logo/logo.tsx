import Image from "next/image";
import Link from "next/link";

interface iLogo {
  link?: string;
  clickable?: boolean;
}

export const Logo = ({ link = "/summary", clickable }: iLogo) => {
  return (
    <>
      {clickable ? (
        <Image
          src="/assets/images/LogoL.svg"
          alt="veerge logo"
          width={100}
          height={30}
        />
      ) : (
        <Link href={link}>
          <Image
            src="/assets/images/Logo.svg"
            alt="veerge logo"
            width={100}
            height={30}
          />
        </Link>
      )}
    </>
  );
};
