"use client";

import { fetchPrefectureReturn } from "@/services/prefectures/types";
import useCheckBox from "../hooks/usePrefToggleButton";
import { PrefToggleButton } from "../PrefToggleButton";

type Props = {
  prefDataList: fetchPrefectureReturn[];
};

export const PrefToggleButtonList = ({ prefDataList }: Props) => {
  const { prefCodes, handleToggleChange } = useCheckBox();

  return (
    <section className="toggle-button-list">
      {prefDataList.map((prefData) => {
        return (
          <PrefToggleButton
            key={prefData.prefName}
            prefData={prefData}
            handleToggleChange={handleToggleChange}
            checked={prefCodes.includes(prefData.prefCode.toString())}
          />
        );
      })}
    </section>
  );
};
