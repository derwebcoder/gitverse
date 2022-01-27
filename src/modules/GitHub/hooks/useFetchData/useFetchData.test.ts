import { renderHook, act } from "@testing-library/react-hooks";
import { FetchStatus } from "../../models/FetchStatus";
import { useFetchData } from "./useFetchData";
import {
  errorFunction,
  errorMessage,
  successData,
  successFunction,
} from "./useFetchData.mock";

describe("Hook useFetchData", () => {
  test("successful state change", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData(successFunction)
    );

    const [dataInitial, statusInitial, errorInitial] = result.current;
    expect(dataInitial).toBeUndefined();
    expect(statusInitial).toBe<FetchStatus>("loading");
    expect(errorInitial).toBeUndefined();

    await waitForNextUpdate();

    const [dataRun, statusRun, errorRun] = result.current;
    expect(dataRun).toBe(successData);
    expect(statusRun).toBe<FetchStatus>("success");
    expect(errorRun).toBeUndefined();
  });

  test("failure state change", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData(errorFunction)
    );

    const [dataInitial, statusInitial, errorInitial] = result.current;
    expect(dataInitial).toBeUndefined();
    expect(statusInitial).toBe<FetchStatus>("loading");
    expect(errorInitial).toBeUndefined();

    await waitForNextUpdate();

    const [dataRun, statusRun, errorRun] = result.current;
    expect(dataRun).toBeUndefined();
    expect(statusRun).toBe<FetchStatus>("fail");
    expect(errorRun).not.toBeUndefined();
    expect(errorRun?.message).toBe(errorMessage);
  });
});
