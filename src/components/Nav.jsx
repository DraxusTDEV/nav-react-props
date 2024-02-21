const Nav = ({ ...props }) => {
  const [{ color, height, backgroundColor, width, fontSize }] = [{ ...props }];

  return (
    <div>
      <nav style={{ color, height, backgroundColor, width, fontSize }}>Nav</nav>
    </div>
  );
};

export default Nav;
