export const css = `
<style>
  * {
    font-size: 2.5rem;
    color: var(--grey);
  }

  .difficulty-section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    align-content: center;
    height: 400px;
  }

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
    font-family: 'Coiny', cursive;
  }

  span {
    display: block;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 2rem;
    transform: translateY(-6px);
    height: 50px;
    outline-offset: 4px;
  }

  button:active span {
    transform: translateY(-2px);
  }

  .easy-btn {
    background:hsl(121deg, 100%, 32%);
  }

  .easy-btn span {

    background: hsl(125deg, 100%, 47%);
  }
  .medium-btn {
    background: hsl(60deg, 100%, 32%);
  }
  .medium-btn span {
    background: hsl(60deg, 100%, 47%);
  }
  .expert-btn {
    background: hsl(340deg 100% 32%);
  }
  .expert-btn span{
    background: hsl(345deg 100% 47%);
  }
</style>`