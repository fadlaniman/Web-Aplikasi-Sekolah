import React from "react";
import Navbar from "./fragments/navbar";
import Album from "./fragments/album";
import Deskripsi from "./fragments/deskripsi";
import Footer from "./fragments/footer";
import Contents from "./fragments/content";

function App() {
  return (
    <>
      <div>
        <nav>
          <Navbar />
        </nav>
        <main>
          <section>
            <Album />
          </section>
          <section>
            <Deskripsi />
          </section>
          <section>
            <Contents />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
