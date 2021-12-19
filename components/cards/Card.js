import { Flex, Container, Box, Image, Text } from "@theme-ui/components";

export default function Card(props) {
  return (
    <Container sx={styles.card.container}>
      <Box sx={styles.card.imgContainer}>
        <Image
          sx={styles.card.imgContainer.img}
          src={props.imgURL}
          alt="NFT illustration"
        />
      </Box>

      <Flex sx={styles.card.titleContainer}>
        <Text sx={styles.card.titleContainer.title} as="h2">
          {props.title}
        </Text>
        <Text sx={styles.card.titleContainer.price} as="p">
          {props.price} ETH
        </Text>
      </Flex>

      <Box sx={styles.card.separator} />

      <Flex sx={styles.card.favoriteContainer}>
        <Box sx={styles.card.circleContainer}>
          <Box sx={styles.card.favoriteContainer.circle.first} />
          <Box sx={styles.card.favoriteContainer.circle.second} />
          <Flex sx={styles.card.favoriteContainer.plusSign}>
            <Text as="p">+</Text>
          </Flex>
        </Box>

        <Text sx={styles.card.favoriteContainer.text} as="p">
          favorite this
        </Text>
      </Flex>
    </Container>
  );
}

const styles = {
  card: {
    container: {
      width: "300px",
      backgroundColor: "var(--secondary-color)",
      padding: "1.5rem",
      m: 3,
      borderRadius: "10px",
      boxShadow: "0 10px 25px rgb(0,0,0, 0.2)",
      transition: ".2s",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(110%)",
      },
    },
    imgContainer: {
      width: "100%",
      height: "200px",
      overflow: "hidden",
      borderRadius: "10px",
      img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transform: "scale(160%)",
      },
    },
    titleContainer: {
      mt: 3,
      justifyContent: "space-between",
      title: {
        fontSize: ".9rem",
        color: "var(--primary-text-color)",
      },
      price: {
        fontSize: ".9rem",
        color: "var(--secondary-text-color)",
        fontWeight: "700",
      },
    },
    separator: {
      width: "100%",
      height: "1px",
      margin: "1rem auto",
      backgroundColor: "var(--sub-text-color)",
    },
    circleContainer: {
      position: "relative",
    },
    favoriteContainer: {
      justifyContent: "space-between",
      alignItems: "center",
      circle: {
        first: {
          position: "absolute",
          top: "-10px",
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          backgroundColor: "var(--primary-color)",
        },
        second: {
          position: "absolute",
          top: "-10px",
          left: "15px",
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          backgroundColor: "var(--alt-color)",
        },
      },
      plusSign: {
        position: "absolute",
        top: "-10px",
        left: "30px",
        width: "25px",
        height: "25px",
        backgroundColor: "var(--secondary-text-color)",
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "700",
      },
      text: {
        color: "var(--primary-text-color)",
        fontWeight: "500",
        fontSize: ".8rem",
      },
    },
  },
};
