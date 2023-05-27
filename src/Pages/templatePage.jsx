import Navbar from "../fragments/navbar";
import Footer from "../fragments/footer";
import React from "react";

const Page = (props) => {
  const { title } = props;
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <section>{title}</section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
