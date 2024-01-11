export type fetchPrefectureReturn = {
  prefCode: number;
  prefName: string;
};

export type fetchPrefecturesReturn = {
  data: {
    message: string | null;
    result: fetchPrefectureReturn[];
  };
};
