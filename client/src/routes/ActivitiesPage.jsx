import Activities from "../Components/Activities";
import { useUser } from "@clerk/clerk-react";


const ActivitiesPage = () => {
  const { user } = useUser();
  if (!user) return <div>Loading...</div>;
  return (
    <div>
      <Activities userId={user.id} />
    </div>
  );
};

export default ActivitiesPage;