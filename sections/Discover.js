import { Flex, Text, Container, Box } from "@theme-ui/components";
import { BiTrendingUp } from "react-icons/bi";

import Card from "../components/cards/Card";
import cardData from "../components/cards/cards.data";

export default function Discover() {
  return (
    <Container as="section" id="discover" sx={styles.container}>
      <Flex sx={styles.titleContainer}>
        <Text as="h2" sx={styles.title}>
          Trending NFT
        </Text>
        <Box sx={styles.icon}>
          <BiTrendingUp />
        </Box>
      </Flex>

      <Flex sx={styles.discover}>
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            price={card.price}
            imgURL={card.imgURL}
          />
        ))}
      </Flex>
    </Container>
  );
}

const styles = {
  container: {
    paddingTop: "5rem",
  },
  discover: {
    flexWrap: "wrap",
    justifyContent: "center",
  },
  titleContainer: {
    justifyContent: "center",
  },
  title: {
    fontSize: "1.2rem",
    textAlign: "left",
    color: "var(--primary-text-color)",
    fontWeight: "600",
  },
  icon: {
    color: "var(--alt-color)",
    fontSize: "30px",
  },
};
