import "./styles.css";
import editIcon from "../../../assets/edit.svg";
import deleteIcon from "../../../assets/delete.svg";
import * as productService from "../../../services/product-service";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";
import DialogInfo from "../../../components/DialogInfo";
import DialogConfirmation from "../../../components/DialogConfirmation";
import ButtonInverse from "../../../components/ButtonInverse";
import { useNavigate } from "react-router-dom";

type QueryParams = {
  page: number;
  name: string;
};

export default function ProductListing() {
  const navigate = useNavigate();

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [isLastPage, setIsLastPage] = useState(false);

  const [queryParams, setqueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação com Sucesso!",
  });

  const [dialogConfirmationData, setDialogConfirmationData] = useState({
    visible: false,
    id: 0,
    message: "Tem certeza?",
  });

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams]);

  function handleNewProductClick() {
    navigate("/admin/products/create");
  }

  function handleSearch(searchText: string) {
    setProducts([]);
    setqueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setqueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  function handleDialogInfoClose() {
    setDialogInfoData({ ...dialogInfoData, visible: false });
  }

  function handleDeleteClick(productId: number) {
    setDialogConfirmationData({
      ...dialogConfirmationData,
      id: productId,
      visible: true,
    });
  }

  function handleUpdateClick(productId: number) {
    navigate(`/admin/products/${productId}`);
  }

  async function handleDialogConfirmationAnswer(
    answer: boolean,
    productId: number
  ) {
    if (answer === true) {
      try {
        await productService.deleteById(productId);
        setProducts([]);
        setqueryParams({ ...queryParams, page: 0 });
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Erro desconhecido";
        setDialogInfoData({ visible: true, message: errorMessage });
      }
    }

    setDialogConfirmationData({
      ...dialogConfirmationData,
      id: productId,
      visible: false,
    });
  }

  return (
    <main>
      <section id="product-listing-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>
        <div className="dsc-btn-page-container dsc-mb20">
          <div onClick={handleNewProductClick}>
            <ButtonInverse text="Novo" />
          </div>
        </div>
        <SearchBar onSearch={handleSearch} />
        <table className="dsc-table dsc-mb20 dsc-mt20">
          <thead>
            <tr>
              <th className="dsc-table-576">ID</th>
              <th></th>
              <th className="dsc-table-768">Preço</th>
              <th className="dsc-txt-left">Nome</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="dsc-table-576">{product.id}</td>
                <td>
                  <img
                    className="dsc-product-listing-image"
                    src={product.imgUrl}
                    alt={product.name}
                  />
                </td>
                <td className="dsc-table-768">R$ {product.price.toFixed(2)}</td>
                <td className="dsc-txt-left">{product.name}</td>
                <td>
                  <img
                    onClick={() => handleUpdateClick(product.id)}
                    className="dsc-product-listing-btn"
                    src={editIcon}
                    alt="Editar"
                  />
                </td>
                <td>
                  <img
                    onClick={() => handleDeleteClick(product.id)}
                    className="dsc-product-listing-btn"
                    src={deleteIcon}
                    alt="Deletar"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!isLastPage && (
          <div>
            <ButtonNextPage onNextPage={handleNextPageClick} />
          </div>
        )}
      </section>
      {dialogInfoData.visible && (
        <DialogInfo
          message={dialogInfoData.message}
          onDialogClose={handleDialogInfoClose}
        />
      )}
      {dialogConfirmationData.visible && (
        <DialogConfirmation
          id={dialogConfirmationData.id}
          message={dialogConfirmationData.message}
          onDialogAnswer={handleDialogConfirmationAnswer}
        />
      )}
    </main>
  );
}
