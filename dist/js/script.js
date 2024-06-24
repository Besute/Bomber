const NavigationMenu = function() {
    const [page, setPage] = React.useState(false)
    return (
      <li className="navigation-menu__container">
        <ul className="navigation-menu__item_1">
          <a href="#" className={page ? 'online' : 'offline'} onClick={() => setPage(!page)}>spammer</a>
        </ul>
        <ul className="navigation-menu__item_2">
          <a href="#" className={!page ? 'online' : 'offline'} onClick={() => setPage(!page)}>introduction</a>
        </ul>
      </li>
    );
}
const Bomber = function () {
    const [value, setValue] = React.useState(50)
    return (
        <form className='form'>
            <input type='text' className='form__input' id='phone' name='phone' placeholder='ENTER TARGET NUMBER...'/>
            <label className='form__label' for='power'>CHOOSE AMOUNT OF MESSAGES</label>
            <label className='form__label' for='power'>1</label>
            <label className='form__label' for='power'>100</label>
            <input type="range" className="form__power" name="power" min="1" max="100" />
            <button type='button' className='form__button'></button>
        </form>
    )
}
ReactDOM.render(<NavigationMenu />, document.querySelector(".navigation-menu"));
ReactDOM.render(<Bomber />, document.querySelector(".bomber"));