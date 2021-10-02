import React, { useState } from "react";
import { FiEdit3, FiTrash } from "react-icons/fi";

import * as S from "./styles";
import api from "../../services/api";

interface IFoodPlate {
  id: string;

  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

export const Food: React.FC = (available) => {
  const [food, setFood] = useState<IFoodPlate[]>([]);
  const [editingFood, setEditingFood] = useState(false);
  const [/* toggleAvailable */, setToggleAvailable] = useState(false);
  const [isAvailable, setisAvailable] = useState(true);

  async function toggleAvailable() {
    await api.put<IFoodPlate>(`/foods/${food.id}`, {
      available: !food.available,
    }); 
    setToggleAvailable(!food.available);
  }


  const handleEditFood = (food: boolean | ((prevState: boolean) => boolean)) => {
    setEditingFood(food);

  }

  const handleDelete = async (id: number) => {
    await api.delete<IFoodPlate>(`/foods/${id}`);
  /*   setFood(food.filter((food) => food.id !== id)); */
  };

  return (
    <>
      <S.Container available={isAvailable}>
        <header>
          <img src={food.image} alt={food.name} />
        </header>
        <section className="body">
          <h2>{food.name}</h2>
          <p>{food.description}</p>
          <p className="price">
            R$ <b>{food.price}</b>
          </p>
        </section>
        <section className="footer">
          <div className="icon-container">
            <button
              type="button"
              className="icon"
              onClick={() => handleEditFood(!editingFood)}
              data-testid={`edit-food-${food.id}`}
            >
              <FiEdit3 size={20} />
            </button>

            <button
              type="button"
              className="icon"
              onClick={() => handleDelete(food.id)}
              data-testid={`remove-food-${food.id}`}
            >
              <FiTrash size={20} />
            </button>
          </div>

          <div className="availability-container">
            <p>{isAvailable ? "Disponível" : "Indisponível"}</p>

            <label htmlFor={`available-switch-${food.id}`} className="switch">
              <input
                id={`available-switch-${food.id}`}
                type="checkbox"
                checked={isAvailable}
                onChange={toggleAvailable}
                data-testid={`change-status-food-${food.id}`}
              />
              <span className="slider" />
            </label>
          </div>
        </section>
      </S.Container>
    </>
  );
};

/*   toggleAvailable = async () => {
    const { food } = this.props;
    const { isAvailable } = this.state;

    await api.put(`/foods/${food.id}`, {
      ...food,
      available: !isAvailable,
    });

    this.setState({ isAvailable: !isAvailable });
  }

  setEditingFood = () => {
    const { food, handleEditFood } = this.props;

    handleEditFood(food);
  } */

/*   const { isAvailable } = this.state;
    const { food, handleDelete } = this.props;

     */

export default Food;
