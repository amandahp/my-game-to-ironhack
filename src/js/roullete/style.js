export const css = `
<style>
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .roullete {
    margin-bottom: 10px ;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background:#C7FFD8;
    border: 1px solid var(--brown);
    box-shadow: var(--box-shadow);
    position: relative;
  }
  .roullete.loop {
    animation: rotation 7s ease-in-out forwards;
  }
  .fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    clip: rect(0px, 300px, 300px, 150px);
  }
  .fill::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    clip: rect(0px, 150px, 200px, 0px);
    transform: rotate(45deg);
  }
  .fill_1::after {
    background: var(--one-color);
  }
  .fill_2 {
    transform: rotate(90deg);
  }
  .fill_2::after {
    background: var(--five-color);
  }
  .fill_3 {
    transform: rotate(135deg);
  }
  .fill_3::after {
    background: var(--two-color);
  }
  .fill_4 {
    transform: rotate(225deg);
  }
  .fill_4::after {
    background: var(--six-color);
  }
  .fill_5 {
    transform: rotate(270deg);
  }
  .fill_5::after {
    background: var(--three-color);
  }

  .line {
    width: 300px;
    height: 1px;
    background: black;
    position: absolute;
    box-shadow: var(--box-shadow);
    top: 149px;
    left: 0;
  }
  .line_1 {
    transform: rotate(45deg);
  }
  .line_2 {
    transform: rotate(90deg);
  }
  .line_3 {
    transform: rotate(135deg);
  }
  .line_4 {
    transform: rotate(180deg);
  }
  .content {
    font-size: 1rem;
    padding-top: 20px;
    height: 280px;
    position: absolute;
    width: 100%;
    text-align: center;
  }
  .content_1 {
    transform: rotate(22deg);
  }
  .content_2 {
    transform: rotate(67deg);
  }
  .content_3 {
    transform: rotate(112deg);
  }
  .content_4 {
    transform: rotate(157deg);
  }
  .content_5 {
    transform: rotate(202deg);
  }
  .content_6 {
    transform: rotate(247deg);
  }
  .content_7 {
    transform: rotate(292deg);
  }
  .content_8 {
    transform: rotate(337deg);
  }

  .draw-subject{
    display: none;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    background-color: var(--one-color);
    margin-bottom: 10px;
    font-size: 2rem;
    border-radius: 40px;
    box-shadow: var(--box-shadow);
    text-transform: uppercase ;
  }
  
  .trigger {
    width: 230px;
    height: 85px;
    border-radius: 100px;
    border: 0px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    cursor: pointer; --three-color
    color: var(--brown);
    background: var(--seven-color);
    box-shadow: var(--box-shadow);
    font-size: 1.5rem;
  }

  .trigger:hover {
    opacity: .8;
    width: 250px;
    height: 95px;
    font-size: 1.8rem;
  }
  
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(4045deg);
    }
  }

</style>
`