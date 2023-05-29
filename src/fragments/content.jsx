import React from "react";

const Content = [
  {
    id: 1,
    image: `/public/static/images/image.jpg`,
    header: `contoh judul dari berita utama sma uisu`,
    footer: `Diposting oleh Tata Usaha`,
    Time: `6 month ago`,
  },
  {
    id: 2,
    image: `/public/static/images/image.jpg`,
    header: `contoh judul dari berita utama sma uisu`,
    footer: `Diposting oleh Tata Usaha`,
    Time: `6 month ago`,
  },
  {
    id: 3,
    image: `/public/static/images/image.jpg`,
    header: `contoh judul dari berita utama sma uisu`,
    footer: `Diposting oleh Tata Usaha`,
    Time: `6 month ago`,
  },
  {
    id: 4,
    image: `/public/static/images/image.jpg`,
    header: `contoh judul dari berita utama sma uisu`,
    footer: `Diposting oleh Tata Usaha`,
    Time: `6 month ago`,
  },
  {
    id: 5,
    image: `/public/static/images/image.jpg`,
    header: `contoh judul dari berita utama sma uisu`,
    footer: `Diposting oleh Tata Usaha`,
    Time: `6 month ago`,
  },
];

const Contents = () => {
  return (
    <div className="bg-slate-50 xl:px-20">
      <div className="p-5">
        <h3 className="xl:text-2xl text-xl font-bold">
          Informasi <span className="text-green-800">Utama</span>
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {Content.map((item) => (
            <div className="mt-7 rounded-sm shadow-md" key={item.id}>
              <div>
                <img className="rounded-sm" src={item.image} alt="" />
              </div>
              <div className="py-5 px-10 space-y-2 bg-white">
                <h4 className="uppercase font-bold text-sm">{item.header}</h4>
                <p className="text-sm">{item.footer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contents;
