import "./index.css";
import { ListCard } from "../ListCard";

export const ListRender = ({ list, onEdit }) => {
  if (list?.length === 0) {
    return (
      <>
        <div className="info-list-items">
          <h3>
            Sua lista está vazia, adicione um novo item clicando no botão de
            'Adicionar'.
          </h3>
        </div>
        <div className="mobile-info-list-items">
          <h3>
            Sua lista está vazia, adicione um novo item clicando no botão de
            '+'.
          </h3>
        </div>
      </>
    );
  }

  return (
    <div className="list-render-container">
      {list.map((item) => (
        <ListCard onClick={onEdit} key={item?._id} item={item} />
      ))}
    </div>
  );
};
