export const css = `<style>
  .questions-and-answers{
    display: flex;
    flex-direction: column;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    border-radius: 20px;
    color: white;
    font-size: 1rem;
    background: var(--gaisboro);
  }

  button {
    margin-top: 10px;
    margin-bottom: 10px;
    background: var(--ligth-grey);
    padding: 10px;
    
  }

  button .button-span {
    background: grey;
    font-size: 1rem;
    color: white;
    background: var(--gaisboro) ;
  }

  .question {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 10px;
    width: 200px;
  }

  .life-section {
    background: var(--ligth-grey);
    width: 80px;
    height: 30px;
    border-radius: 40px;
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .life {
    color: red;
    padding: 3px;
  }
  
</style>`