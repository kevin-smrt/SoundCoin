import { Box, Heading, Flex } from "@theme-ui/components";

export default function Logo() {
  return (
    <Flex sx={styles.logoContainer}>
      <Box sx={styles.logoCircle}></Box>
      <Heading as="h1" sx={styles.logoTitle}>
        SoundCoin.
      </Heading>
    </Flex>
  );
}

const styles = {
  logoContainer: {
    alignItems: "center",
  },

  logoTitle: {
    cursor: "pointer",
    fontSize: "3rem",
    fontWeight: "700",
    color: "white",
    ml: 3,
    "@media screen and (max-width: 1024px)": {
      fontSize: "2.5rem",
    },
    "@media screen and (max-width: 480px)": {
      fontSize: "1.3rem",
    },
    "@media screen and (max-width: 320px)": {
      fontSize: "1.1rem",
    },
  },

  logoCircle: {
    display: "inline-block",
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    backgroundColor: "var(--primary-color)",
    "@media screen and (max-width: 1024px)": {
      width: "40px",
      height: "40px",
    },
    "@media screen and (max-width: 480px)": {
      width: "20px",
      height: "20px",
    },
  },
};
