import { useReducer } from 'react';
import styles from './Counter.module.css';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };

    case 'dicrement':
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
}

function init(initState) {
  return {
    ...initState,
    count: initState.count + 10,
  };
}

export default function Counter() {
  // const [count, dipatch] = useState(0);
  const [state, dipatch] = useReducer(
    countReducer,
    {
      count: 0,
    },
    init,
  );

  return (
    <div className={styles.container}>
      <p className={styles.value}>{state.count}</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dipatch({ type: 'increment', payload: 1 })}
      >
        Увеличить
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={() => dipatch({ type: 'dicrement', payload: 1 })}
      >
        Уменьшить
      </button>
    </div>
  );
}
