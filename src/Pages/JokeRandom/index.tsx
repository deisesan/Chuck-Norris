/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { Joke } from '../../Types';
import { getJokerRandom } from '../../Api/Jokes';

const Teste = () => {
  const [joke, setJoke] = useState<Joke>();

  const getJoke = async () => {
    try {
      const responseJoke = await getJokerRandom();
      setJoke(responseJoke.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      <h1>{joke?.type}</h1>
      <h1>{joke?.value.id}</h1>
      <h1>{joke?.value.joke}</h1>
    </div>
  );
};

export default Teste;
