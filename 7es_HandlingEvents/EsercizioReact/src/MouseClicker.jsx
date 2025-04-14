const MouseClicker = () => {
  const clickBtn = (event) => {
    console.log(event.target.name);
  };

  const clickBtn2 = (event) => {
    console.log(event.target.src);
  };
  return (
    <>
      <button name="one" onClick={clickBtn}>
        Clicca Qui!
      </button>
      <button name="two" onClick={clickBtn2}>
        <img src="/vite.svg" />
      </button>
    </>
  );
};

export default MouseClicker;

/*

:- Come è possibile evitare che l'attributo name del pulsante venga visualizzato 
   sulla console quando si fa clic sull'immagine?

:- Se vuoi evitare di stampare il name quando si clicca sull'immagine, 
  devi controllare se il click è avvenuto proprio sull'immagine.
  Se usi event.currentTarget.name, ottieni sempre il name del bottone, 
  indipendentemente da dove clicchi dentro di esso.
*/
