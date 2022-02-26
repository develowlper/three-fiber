export default function Overlay({ ready, clicked, setClicked }) {
  return (
    <>
      {!clicked && (
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 text-white grid place-items-center ${
            ready ? 'ready' : 'notready'
          } ${clicked && 'clicked'}`}
        >
          <button onClick={() => ready && setClicked(true)}>
            {!ready ? 'loading' : 'click to continue'}
          </button>
        </div>
      )}
    </>
  );
}
