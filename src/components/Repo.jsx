import useRepo from "../utils/useRepo";

const InfoBox = ({title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          text-align: center;
          margin: 2rem;
          width: 100%;
          inline-size: 500px;
          overflow-wrap: break-word;
        }
      `}</style>
    </div>
  );
};

const Repo = ({ repoId }) => {
  const { repo, isLoading, isError } = useRepo(repoId);

  if (isLoading) return <InfoBox title={`Loading ...`} description={repoId} />;

  if (isError)
    return (
      <InfoBox
        title={`An error happened fetching ${repoId} :(`}
        description={repo.message}
      />
    );

  // console.log(repo, isLoading, isError);

  return (
    <InfoBox
      title={`${repo.full_name} ${repo.stargazers_count} ⭐️`}
      description={repo.description}
    />
  );
};

export default Repo;
