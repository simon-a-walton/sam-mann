const IdGenerator = (title) => {
  return (title.toLowerCase().split(" ").join('-'));
}

const NavTitles = ['Health Coaching', 'Work With Me', 'About', 'Contact'];



const NavLinks = NavTitles.map((page, i) => {
      if (page.includes(" ")) {
        return (
          IdGenerator(page)
        )
      } else {
      return (
        page.toLowerCase()
      )
      }
    });

export default NavLinks;
