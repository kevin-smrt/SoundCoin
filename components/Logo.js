import { Box, Heading, Flex } from "@theme-ui/components";

export default function Logo() {
    return (
        <Flex sx={styles.logoContainer}>
            <Box sx={styles.logoCircle}></Box>
            <Heading as="h1" sx={styles.logoTitle}>SoundCoin.</Heading>
        </Flex>
    )
}

const styles = {
    logoContainer: {
        alignItems: 'center',
    },

    logoTitle: {
        fontSize: '3rem',
        fontWeight: '700',
        color: 'white',
        ml: 3,
    },

    logoCircle: {
        display: 'inline-block',
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        backgroundColor: 'var(--primary-color)'
    }
}