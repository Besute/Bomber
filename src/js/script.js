const Pages = function() {
    const [page, setPage] = React.useState(false)
    return (
      <div className='mainData'>
        <div className='navigation'>
          <li className="navigation-menu__container">
            <ul className="navigation-menu__item_1">
              <a href="#" className={page ? 'online' : 'offline'} onClick={() => page ? setPage(page) : setPage(!page)}>spammer</a>
            </ul>
            <ul className="navigation-menu__item_2">
              <a href="#" className={!page ? 'online' : 'offline'} onClick={() => !page ? setPage(page) : setPage(!page)}>introduction</a>
            </ul>
          </li>
        </div>
        {page ? <div className='pages_bomber'>
          <Bomber />
        </div> :
        <div className='pages_introduction'>
          <div className='pages_text'>
            <h2 className='pages_introduction__header'>USAGE</h2>
            <ol className='pages_introduction__mainText'>
              <li className='pages_introduction__text'>Choose a target number.</li>
              <li className='pages_introduction__text'>Set the desired power of the messages.</li>
              <li className='pages_introduction__text'>Click 'Launch' to start sending the messages.</li>
            </ol>
          </div>
        </div>}
      </div>
    );
}
const Bomber = function () {
    const [val, setValue] = React.useState(50)
    React.useEffect(() => {
      fetch("http://localhost:4000/", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          val: val
        }),
      });
    }, [val])
    return (
        <form className='form'>
            <input type='text' className='form__input' id='phone' name='phone' placeholder='ENTER TARGET NUMBER...'/>
            <div className='form__range'>
              <label className='form__label form__label_1' for='power'>CHOOSE AMOUNT OF MESSAGES</label>
              <label className='form__label form__label_2' for='power'>1</label>
              <label className='form__label form__label_3' for='power'>100</label>
              <input type="range" className="form__power" name="power" min="1" max="100" step="1"/>
            </div>
            <button type='button' className='form__button' onClick={() => setValue(document.querySelector('.form__power').value)}>Launch</button>
        </form>
    )
}
ReactDOM.render(<Pages />, document.querySelector(".navigation-menu"));