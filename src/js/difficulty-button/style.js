export const css = `
<style>
  * {
    font-size: 2.5rem;
    color: var(--brown);
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
    width: 230px;
    height: 85px;
    border-radius: 10px;
    border: 0px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    box-shadow: var(--box-shadow);
  }

  button:hover {
    width: 240px;
    height: 95px;
    font-size: 2.5rem;
  }

  .easy-btn {
    background: var(--green);
  }
  .easy-btn:hover {
    background: rgba(0, 255, 3, 0.5);
  }
  .medium-btn {
    background: var(--yellow);
  }
  .medium-btn:hover{
    background: rgba(255, 255, 0, 0.5);
  }
  .expert-btn {
    background: var(--red);
  }
  .expert-btn:hover{
    background: rgba(255, 0, 0, 0.5);
  }
</style>`