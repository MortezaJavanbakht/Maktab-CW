import "./App.css";

function App() {
  return (
  <>
  <div className={'container'}>
    <div className={'leftBox'}>
      <div>
        <label>جمع کل سفارشات:</label>
        <span>0 تومان</span>
      </div>
      <div>
      <label>حق سرویس و کارمزد:</label>
      <span>0 تومان</span>
      </div>
      <div>
      <label>تخفیف:</label>
      <span>0 درصد</span>
      </div>
      <div>
      <input type='text' placeholder={"کد تخفیف"}></input>
      <div><i class="bi bi-check-square-fill"></i></div>
      </div>
      <div className="totalPrice">
      <label>مبلغ قابل پرداخت:</label>
      <span>0 تومان</span>
      </div>
      <div typeof="submit" className="subBtn">ثبت سفارش</div>
    </div>
    <div className={'rightBox'}>
      <footer className="footer-box">رستوران مک دونالد شعبه تهران</footer>
    </div>
  </div>
  </>
  )
}

export default App;
