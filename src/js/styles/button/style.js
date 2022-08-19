export const cssButton = `
<style>
  button {
    width: 220px;
    height: 75px;
    border-radius: 15px;
    outline-offset: 4px;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }

  .button-span {
    display: block;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 2rem;
    transform: translateY(-6px);
    height: 50px;
    outline-offset: 4px;
    color: white;
    font-family: 'Coiny', cursive;
  }

  button:active .button-span {
    transform: translateY(-2px);
  }

  button:hover {
    width: 230px;
    height: 80px;
  }
</style>

`