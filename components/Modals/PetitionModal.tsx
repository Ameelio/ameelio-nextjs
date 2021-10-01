import { Dropdown, Modal, Menu } from "antd";
import Button from "components/Button";
import React, { useState } from "react";
import { DownOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { PETITION_LINKS, US_STATE } from "utils/constants";
import { useAppContext } from "context/state";

interface Props {}

const PetitionModal = ({}: Props) => {
  const { state, togglePetitionModal } = useAppContext();
  const [selectedState, setSelectedState] = useState<US_STATE>();

  const menu = (
    <Menu className="h-96 overflow-y-scroll">
      {Object.values(US_STATE).map((state) => (
        <Menu.Item key={state} onClick={() => setSelectedState(state)}>
          {state}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Modal
      visible={state.isPetitionModalOpen}
      onOk={() => togglePetitionModal()}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
      onCancel={() => togglePetitionModal()}
    >
      <div className="flex flex-col items-center gap-y-4">
        <span className="text-lg font-bod text-center">
          Select a state to open its petition in a new tab.
        </span>
        <span className="text-center">
          You can come back and sign as many states’ petitions as you’d like.
        </span>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button variant="secondary">
            {selectedState || "Select State"} <DownOutlined />
          </Button>
        </Dropdown>
        <Button
          variant="primary"
          className={`${selectedState ? "" : "hidden"}`}
          onClick={() =>
            selectedState &&
            window.open(PETITION_LINKS[selectedState], "_blank")
          }
        >
          Sign the petition <ArrowRightOutlined />
        </Button>
      </div>
    </Modal>
  );
};

export default PetitionModal;
