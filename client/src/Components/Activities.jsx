import Activity from "./Activity";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const fetchActivities = async (userId, pageParam) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/activities/${userId}`, {
    params: { page: pageParam, limit: 2 },
  });
  return res.data;
};

const Activities = ({ userId }) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["activities", userId],
    queryFn: ({ pageParam = 1 }) => fetchActivities(userId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  if (status === "loading") return "Loading...";
  //if (isFetching) return "Loading...";
  

  if (status === "error") return "Something went wrong!";
  //if (error) return "Something went wrong!";

  const allActivities = data?.pages?.flatMap(page => page.activities) || [];
  return (
    <InfiniteScroll
      dataLength={allActivities.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        <p>
          <b>All posts loaded!</b>
        </p>
      }
    >
      {allActivities.map((activity) => (
        <Activity key={activity._id} activity={activity} />
      ))}
    </InfiniteScroll>
  );
};

export default Activities;