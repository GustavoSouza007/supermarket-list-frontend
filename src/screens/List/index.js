import "./index.css";
import { useState, useEffect } from "react";
import { getList } from "../../services/request";
import { Loader, ListRender, Button, Modal } from "../../components";
import { SAVE_USERNAME_PATH } from "../../services/constants";

export const ListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);
  const [selectItem, setSelectItem] = useState(null);
  const username = localStorage.getItem(SAVE_USERNAME_PATH);

  const loadListItems = async () => {
    setLoading(true);
    const result = await getList(username);
    setListData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadListItems(username);
  }, [username]);

  const onClickAddButton = () => {
    setSelectItem(null);
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
    loadListItems();
    setSelectItem(null);
  };

  const onEditItem = (item) => {
    setSelectItem(item);
    setModalVisible(true);
  };

  return (
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <div className="list-screen-title-container">
            <img
              className="logo-image"
              src="/images/logo.png"
              alt="supermarket-list-logo"
            />
            <h1 className="list-screen-header-title">Lista de Supermercado</h1>
          </div>
          <div className="list-screen-header-button-container">
            <Button onClick={onClickAddButton}>Adicionar</Button>
          </div>
          <div className="mobile-header-button">
            <Button className="mobile-header-button" onClick={onClickAddButton}>
              +
            </Button>
          </div>
        </div>
        <div className="list-screen-list-container">
          {loading ? (
            <Loader />
          ) : (
            <ListRender onEdit={onEditItem} list={listData} />
          )}
        </div>
      </div>
      {modalVisible && <Modal item={selectItem} onClose={onCloseModal} />}
    </div>
  );
};
