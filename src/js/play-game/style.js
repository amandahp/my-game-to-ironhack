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