import { NavLink, Flex } from "@theme-ui/components";
import Logo from "../Logo";
import { BiWallet, BiUser } from 'react-icons/bi'

import headerData from "./header-data";

export default function Header() {
    return (
        <Flex as="header" sx={styles.header}>
                <Logo />

                <Flex as="nav" sx={styles.headerLinkContainer}>
                    {headerData.map((data, index) =>
                        <NavLink
                            key={index}
                            sx={styles.headerLink}
                            href={data.path}>
                            {data.label}
                        </NavLink>
                    )}

                    <Flex sx={styles.headerIcon}>
                        <BiWallet />
                    </Flex>

                    <Flex sx={styles.headerIcon}>
                        <BiUser />
                    </Flex>

                </Flex>

        </Flex>
    )
}

const styles = {
    header: {
        userSelect: 'none',
        justifyContent: 'space-around',
        p: 4,
    },

    headerLinkContainer: {
        width: '500px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    headerLink: {
        textDecoration: 'none',
        color: 'white',
        fontWeight: 600,
        transition: '.2s',
        '&:hover': {
            color: 'var(--secondary-text-color)',
        },
    },

    headerIcon: {
        cursor: 'pointer',
        color: 'white',
        fontSize: '25px',
        transition: '.2s',
        '&:hover': {
            color: 'var(--secondary-text-color)',
        },
    }
}