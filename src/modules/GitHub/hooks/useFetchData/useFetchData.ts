import { useEffect, useState } from "react";
import { FetchStatus } from "../../models/FetchStatus";

type FetchFunction<T> = () => Promise<T>;

/**
 * Wraps a function to fetch data and provides additional request status information
 *
 * @param requestData A function that will fetch the wanted data
 * @returns The fetched data, the current fetch status and an error message if the request failed
 */
export const useFetchData = <T>(
  requestData: FetchFunction<T>
): [T | undefined, FetchStatus, Error | undefined] => {
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>("not_tried");
  const [errorMessage, setErrorMessage] = useState<Error>();
  const [data, setData] = useState<T>();

  useEffect(() => {
    (async () => {
      try {
        setFetchStatus("loading");
        setErrorMessage(undefined);
        setData(await requestData());
        setFetchStatus("success");
      } catch (e) {
        setErrorMessage(e as Error);
        setFetchStatus("fail");
      }
    })();
  }, [requestData]);

  return [data, fetchStatus, errorMessage];
};
