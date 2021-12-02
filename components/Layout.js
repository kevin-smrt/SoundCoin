import { Fragment } from "react";
import Header from "./header/Header";
import SEO from './SEO/SEO';

export default function Layout(props) {
    return (
        <Fragment>
            <SEO title={props.title}/>
            <Header />
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}