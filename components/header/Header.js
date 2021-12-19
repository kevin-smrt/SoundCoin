import { NavLink, Flex } from "@theme-ui/components";
import Logo from "../Logo";
import { BiWallet, BiUser, BiMenu } from "react-icons/bi";

import headerData from "./header-data";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(true);

  useEffect(() => {
    if (isMenuActive) {
      styles.headerLinkContainer[
        "@media screen and (max-width: 1024px)"
      ].transform = "translateX(0)";
    } else {
      styles.headerLinkContainer[
        "@media screen and (max-width: 1024px)"
      ].transform = "translateX(100%)";
    }
  }, [isMenuActive]);

  function handleMobileMenu() {
    setIsMenuActive((oldValue) => !oldValue);
  }

  function navigateWallet() {}

  function navigateProfile() {}

  return (
    <Flex as="header" sx={styles.header}>
      <Logo />

      <Flex sx={styles.headerMenuMobileIcon}>
        <BiMenu onClick={handleMobileMenu} />
      </Flex>

      <Flex as="nav" sx={styles.headerLinkContainer}>
        {headerData.map((data, index) => (
          <NavLink key={index} sx={styles.headerLink} href={data.path}>
            {data.label}
          </NavLink>
        ))}

        <Flex sx={styles.headerIcon}>
          <BiWallet />
        </Flex>

        <Flex sx={styles.headerIcon}>
          <BiUser />
        </Flex>
      </Flex>
    </Flex>
  );
}

const styles = {
  header: {
    position: "fixed",
    zIndex: "1000",
    height: "auto",
    width: "100%",
    userSelect: "none",
    justifyContent: "space-around",
    p: 4,
    "@media screen and (max-width: 1024px)": {
      justifyContent: "left",
    },
  },

  headerLinkContainer: {
    width: "500px",
    justifyContent: "space-evenly",
    alignItems: "center",
    "@media screen and (max-width: 1024px)": {
      transition: ".2s",
      position: "absolute",
      right: "0",
      top: "0",
      transform: "translateX(100%)",
      width: "100%",
      height: "100vh",
      flexDirection: "column",
      padding: "3rem",
      backgroundColor: "var(--background-primary)",
    },
    "@media screen and (max-width: 480px)": {},
  },

  headerLink: {
    textDecoration: "none",
    color: "white",
    fontWeight: 600,
    transition: ".2s",
    "&:hover": {
      color: "var(--secondary-text-color)",
    },
  },

  headerIcon: {
    cursor: "pointer",
    color: "white",
    fontSize: "25px",
    transition: ".2s",
    "&:hover": {
      color: "var(--secondary-text-color)",
    },
  },

  headerMenuMobileIcon: {
    position: "absolute",
    right: "60px",
    top: "45px",
    zIndex: "4",
    cursor: "pointer",
    color: "white",
    fontSize: "35px",
    alignItems: "center",
    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
    "@media screen and (max-width: 480px)": {
      top: "25px",
      right: "40px",
    },
  },

  headerMenuMobileIconActive: {
    transform: "translateX(0)",
  },
};
