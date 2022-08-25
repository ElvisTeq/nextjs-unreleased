import Header from "./Header";
import classes from "./Layout.module.css";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className={classes.main}>
      <Header />
      <main className={classes.body}>{props.children}</main>
      <Footer className={classes.footer} />
    </div>
  );
}

export default Layout;
