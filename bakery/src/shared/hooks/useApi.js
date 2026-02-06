import { useState, useCallback, useEffect } from 'react';

/**
 * Powerful generic hook for orchestrating asynchronous API requests.
 * Manages standardized states (data, loading, error) and provides a manual 'execute' trigger.
 * 
 * @param {function(...any): Promise<import('axios').AxiosResponse>} apiFunc - The async request function.
 * @param {Object} [options={}] - Configuration flags.
 * @param {boolean} [options.immediate=false] - If true, triggers the request automatically on component mount.
 * @param {Array} [options.dependencies=[]] - React dependencies for re-execution.
 * @param {function(any): any} [options.mapper=(d)=>d] - Transformation function for raw results.
 * 
 * @returns {Object} API state controller.
 * @property {any} data - The successfully fetched (and optionally mapped) data.
 * @property {boolean} loading - True while the request is in flight.
 * @property {string|null} error - The error message if the request fails.
 * @property {Function} execute - Manual trigger function. Returns a Promise.
 * @property {Function} setData - Direct setter for the internal data state.
 */
export function useApi(apiFunc, { immediate = false, dependencies = [], mapper = (d) => d } = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(immediate);
    const [error, setError] = useState(null);

    const execute = useCallback(async (...args) => {
        setLoading(true);
        setError(null);
        try {
            const response = await apiFunc(...args);
            // Assuming Axios structure res.data.data or direct
            const rawData = response?.data?.data !== undefined ? response.data.data : response?.data;
            const mappedData = mapper(rawData);
            setData(mappedData);
            return mappedData;
        } catch (err) {
            const errorMessage = err?.response?.data?.message || err?.message || String(err);
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [apiFunc, mapper]);

    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps

    return { data, loading, error, execute, setData };
}
