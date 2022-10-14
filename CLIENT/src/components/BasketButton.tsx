type BasketButtonProps = {
  _id: string;
  ordered: number;
};

const BasketButton = ({ _id, ordered }: BasketButtonProps) => {
  return (
    <button className="basket-click" onClick={() => console.log(_id)}>
      {/* {ordered > 0 ? (
        `${ordered}x`
      ) : ( */}
      <i className="fas fa-basket-shopping"></i>
      {/* )} */}
    </button>
  );
};

export default BasketButton;
