import { useRouter } from "next/router";

const Platforms = () => {
  const router = useRouter();

  const platformId = router.query.platformId;

  return <div>Platforms</div>;
};

export default Platforms;
