import useSWR from "swr";

// swr handles cache, cache invalidation, and more
const useRepo = (repo) => {
  const fetcher = () =>
    fetch(`/api/v1/repo?id=${repo}`).then((res) => res.json());
  const { data, error } = useSWR(repo, fetcher);

  return {
    repo: data,
    isLoading: !error && !data,
    isError: error || (data && !data.id),
  };
};

export default useRepo;
