import {
  Decoder,
  object,
  string,
  number,
  array,
  constant,
} from "@mojotech/json-type-validation";
import { fetchPrefectureReturn, fetchPrefecturesReturn } from "./types";

const fetchPrefectureReturnDecoder: Decoder<fetchPrefectureReturn> = object({
  prefCode: number(),
  prefName: string(),
});

const fetchPrefectureReturnsDecoder: Decoder<fetchPrefecturesReturn> = object({
  message: constant(null),
  result: array(fetchPrefectureReturnDecoder),
});

export const fetchPrefectureNames =
  async (): Promise<fetchPrefecturesReturn> => {
    try {
      const res = await fetch(
        "https://yumemi-frontend-selection.vercel.app/api/prefectures",
        {
          method: "GET",
        }
      );

      const prefectures = await res
        .json()
        .then(fetchPrefectureReturnsDecoder.runPromise);
      return prefectures;
    } catch (error) {
      console.log(error);
      throw Error("Failed fetch Prefecture Names.");
    }
  };
