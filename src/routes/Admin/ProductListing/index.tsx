import "./styles.css";
import editIcon from "../../../assets/edit.svg";
import deleteIcon from "../../../assets/delete.svg";
import computerIcon from "../../../assets/computer.png";

export default function ProductListing() {
  return (
    <main>
      <section id="product-listing-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>
        <div className="dsc-btn-page-container dsc-mb20">
          <div className="dsc-btn dsc-btn-white">Novo</div>
        </div>
        <form className="dsc-search-bar">
          <button type="submit">🔎︎</button>
          <input type="text" placeholder="Nome do produto" />
          <button type="reset">🗙</button>
        </form>
        <table className="dsc-table dsc-mb20 dsc-mt20">
          <thead>
            <th className="dsc-table-576">ID</th>
            <th></th>
            <th className="dsc-table-768">Preço</th>
            <th className="dsc-txt-left">Nome</th>
            <th></th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td className="dsc-table-576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={computerIcon}
                  alt="computer"
                />
              </td>
              <td className="dsc-table-768">R$ 5000,00</td>
              <td className="dsc-txt-left">Computador Gamer XT Puls Ultra</td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src={editIcon}
                  alt="edit"
                />
              </td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src={deleteIcon}
                  alt="delete"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="dsc-btn-next-page">Carregar mais</div>
      </section>
    </main>
  );
}
