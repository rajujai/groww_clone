export function preloginNavbar() {
  return `<div class="navbar">
    <img
      src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/logo-dark-groww.83f43714.svg"
    />
    <!-- --------------- -->
    <div id="searchdiv">
      <input
        type="text"
        id="myInput"
        onkeyup="myFunction()"
        placeholder="What are you looking for today?"
        title="Type in a name"
      />
      <div id="myUL">
      <ul class="myUL">
        <li><a href="#">📈 TCS</a></li>
        <li><a href="#">📈 HDFC</a></li>

        <li><a href="#">📈 RELIANCE</a></li>
        <li><a href="#">📈 SBI</a></li>

        <li><a href="#">📈 TATA DIGITAL INDIVIDUAL FUND</a></li>
        <li><a href="#">📈 NESTLE</a></li>
        <li><a href="#">📈 CHAMBAL FERTILIZERS</a></li>
        <li><a href="#">📈 KOTAK SMALL CAP FUND</a></li>
      </ul>
      </div>
    </div>
    <div class="loginbutton">
      <button class="login_btn">Login/Register</button>
    </div>
    </div>
    <script src="/scripts/navbar.js"></script>`;
}

export default function () {
  return `<div class="navbar">
  <img
      src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/logo-dark-groww.83f43714.svg" />
  <h3 class="options_post_login">Explore</h3>
  <h3 class="options_post_login leftmargin">Investments</h3>
  <div id="searchdiv">
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="What are you looking for today?"
          title="Type in a name" />
      <div id="myUL">
      <ul class="myUL">
          <li><a href="#">📈 TCS</a></li>
          <li><a href="#">📈 HDFC</a></li>
          <li><a href="#">📈 RELIANCE</a></li>
          <li><a href="#">📈 SBI</a></li>
          <li><a href="#">📈 TATA DIGITAL INDIVIDUAL FUND</a></li>
          <li><a href="#">📈 NESTLE</a></li>
          <li><a href="#">📈 CHAMBAL FERTILIZERS</a></li>
          <li><a href="#">📈 KOTAK SMALL CAP FUND</a></li>
      </ul>
      </div>
  </div>
  <div class="navbar_options">
      <p id="bell">🔔</p>
      <p id="wallet_emoji">📁</p>
      <p id="cart_emoji">🛒</p>
      <img src="https://lh3.googleusercontent.com/a-/AOh14GiOZK7Ii7M67abteryNYrlif0v9EMm-Ca50e00DYg=s96-c" />
  </div>
</div>
  <script src="/scripts/navbar.js"></script>`;
}