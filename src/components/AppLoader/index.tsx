import React from "react";
import "./AppLoader.scss";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import { IState } from "../../store/reducers";

export const AppLoader: React.FC = () => {
  const isVisible = useSelector(
    (state: IState) => state.loaderReducer.isShowing
  );

  return isVisible ? (
    <div className="loader-container ">
      <Loader
        type="TailSpin"
        color="#256ce1"
        height={70}
        width={70}
        visible={true}
      />
    </div>
  ) : (
    <></>
  );
};
