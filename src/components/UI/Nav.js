import Link from "./Link";
import styles from "./Nav.module.css";

//customizable navigation of links
const Nav = props => {
    const classes = [styles.nav];
    if (props.inline) { classes.push(styles.inline); }
    if (props.center) { classes.push(styles.center); }
    if (props.border) { classes.push(styles.border); }
    if (props.extraPadding) { classes.push(styles["extra-padding"]); }
    else if (props.lessPadding) { classes.push(styles["less-padding"]); }

    return (
        <ul className={classes.join(' ')}>
            {
                props.links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} style={props.linkStyle} noUnderline={props.linkNoUnderline} size={props.linkSize} bold={props.linkBold}>{link.text}</Link>
                    </li>
                ))
            }
        </ul>
    );
};

export default Nav;