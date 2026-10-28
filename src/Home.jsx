function Home({ schoolName }) {
  return (
    <section>
      <h2>Welcome to Our Class Website</h2>

      <h3>{schoolName}</h3>

      <p>Class Level: TVET Certificate IV</p>
      <p>Trade: Software Development</p>

      <p>
        Welcome to our class website. This website introduces
        our students, our school, and the subjects we study.
      </p>

      <p>
        We learn programming, web development, databases,
        and other important software development skills.
      </p>
    </section>
  );
}

export default Home;