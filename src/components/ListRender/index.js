import { ListCard } from "../ListCard";

export const ListRender = ({ list, onEdit }) => {
  if (list?.length === 0) {
    return (
      <h3>
        Sua lista está vazia, adicione um novo item clicando no botão de
        "Adicionar".
      </h3>
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
