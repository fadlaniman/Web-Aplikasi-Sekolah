import Navbar from "../fragments/navbar";
import Deskripsi from "../fragments/deskripsi";
import Footer from "../fragments/footer";
import Contents from "../fragments/content";
import Album from "../fragments/album";

function AppAdm() {
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

export default AppAdm;
