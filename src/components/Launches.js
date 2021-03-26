import React from "react";
import { useQuery, gql } from "@apollo/client";
import LaunchItem from './LaunchItem'
import Mission from './Mission'
import Loading from './Loading'

const Launches_query = gql`
  query LaunchQuery {
    launches {
      flight_number
      launch_success
      launch_date_local
      mission_name
    }
  }
`;
const Launches = () => {
  const { loading, error, data } = useQuery(Launches_query);
  if (loading) return <Loading/>;
  if (error) return <p>Error </p>;
  return (<>
    <h3>Launches</h3>
    <Mission/>
      {data.launches.map((launch) => {
          return(
            <LaunchItem key={launch.flight_number} launch={launch}/>         
          )
      })}
      </>
  );
};

export default Launches;
