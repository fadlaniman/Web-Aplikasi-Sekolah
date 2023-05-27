import React from "react";

const Kurikulum = () => {
  return (
    <div>
      <div className="px-7 py-7">
        <h1 className="uppercase font-bold text-green-800 text-xl">
          Kurikulum
        </h1>
      </div>
      <div className="grid px-7 pb-7">
        <table className="text-justify table" cellPadding={5} border="2">
          <tr> 
            <th rowSpan={2}>No</th>
            <th rowSpan={2}>Mata Pelajaran</th>
            <th colSpan={2} className="text-center">Jurusan</th>
          </tr>
          <tr className="text-center border-b-2 border-green-800">
            <th>IPA</th>
            <th>IPS</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Agama Islam</td>
            <td></td>
            <td></td>
          </tr>
          <tr className="bg-green-100">
            <td>2</td>
            <td>Kewarganegaraan</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Bahasa Indonesia</td>
            <td></td>
            <td></td>
          </tr>
          <tr className="bg-green-100">
            <td>4</td>
            <td>Bahasa Inggris</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Biologi</td>
            <td></td>
            <td></td>
          </tr>
          <tr className="bg-green-100">
            <td>6</td>
            <td>Fisika</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>7</td>
            <td>Kimia</td>
            <td></td>
            <td></td>
          </tr>
          <tr className="bg-green-100">
            <td>8</td>
            <td>Matematika</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>9</td>
            <td>Ekonomi</td>
            <td></td>
            <td></td>
          </tr>
          <tr className="bg-green-100">
            <td>10</td>
            <td>Sejarah Indonesia</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>11</td>
            <td>Geografi</td>
            <td></td>
            <td></td>
          </tr>
          <tr className="bg-green-100">
            <td>12</td>
            <td>Sosiologi</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Kurikulum;
