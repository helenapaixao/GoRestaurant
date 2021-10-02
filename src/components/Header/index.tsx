import React, { useState } from "react";
import { FiPlusSquare } from "react-icons/fi";

import { Container } from "./styles";
import Logo from "../../assets/logo.svg";

export const Header: React.FC = () => {
  const [openModal, setOpenMOdal] = useState(false);

  return (
    <Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <div>
            <button type="button" onClick={() => setOpenMOdal(openModal)}>
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
