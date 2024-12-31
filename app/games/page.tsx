"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Game } from "@prisma/client";

const getGames = async () => {
  return fetch('/api/games')
    .then(res => res.json())
}

const GamesPage = () => {

  const {data,isLoading,isError} = useQuery({queryKey: ['games'], queryFn: getGames})
  useEffect(() => {
    console.log(data);
  }, [data])

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error</div>

  return (
    <div>
      <h1>Games</h1>
      {data.games.map((game:Game) => (
        <div key={game.id}>
          <h2>{game.title}</h2>
          <p>{game.description}</p>
        </div>
      ))}
    </div>
  );
}

export default GamesPage;
