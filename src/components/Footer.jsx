function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      © {year} Alexander Unger — Built with React &amp; Vite.
    </footer>
  );
}

export default Footer;
