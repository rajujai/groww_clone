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
      <button class="login_btn" onclick="window.location.href='signup.html'">Login/Register</button>
    </div>
    </div>
    <script src="/scripts/navbar.js"></script>`;
}

export default function () {
  return `<div class="navbar">
  <img onclick="window.location.href='index.html'"
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
      <div id="bell">
      <svg class="cartImg333332" width="29px" height="28px" viewBox="0 0 30 28" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" stroke-width="0.63" fill="none" fill-rule="evenodd"><g id="Artboard" transform="translate(-185.000000, -184.000000)"><g id="Group-2" transform="translate(186.000000, 185.000000)"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" id="notification" stroke="var(--text)" stroke-linecap="round" stroke-linejoin="round"></path></g></g></g></svg></div>
      <div id="wallet_emoji">
      <svg class="cartImg3332" width="30px" height="28px" viewBox="0 0 30 28" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Artboard" transform="translate(-185.000000, -184.000000)"><g id="Group-2" transform="translate(186.000000, 185.000000)"><rect id="wallet" stroke="var(--text)" stroke-linecap="round" stroke-linejoin="round" x="0" y="6.58068321" width="28" height="19" rx="2"></rect><path d="M4,6.58068321 L4,2 C4,0.8954305 4.8954305,0 6,0 C6.12622683,0 6.25217021,0.0119498497 6.37614454,0.0356896162 L25.9304926,3.78013925 C26.84833,3.95589535 27.5221047,4.74382507 27.5532379,5.67781997 L28,8.5" id="wallet" stroke="var(--text)" stroke-linecap="round" stroke-Linejoin="round"></path><circle id="wallet" fill="var(--text)" cx="4.5" cy="16.5" r="1.5"></circle></g></g></g></svg></div>
      <div id="cart_emoji">
      <a href="cart.html">
      <svg class="cartImg32" width="25px" height="24px" viewBox="0 0 25 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Artboard" transform="translate(-230.000000, -185.000000)"><g transform="translate(223.000000, 179.000000)"><g id="Group" transform="translate(19.000000, 18.500000) scale(-1, 1) translate(-19.000000, -18.500000) translate(7.000000, 7.000000)" stroke="var(--text)"><path d="M12.29,6 L0,6 L4.16,15 L18,15 M24,0 L19.636,0 L18,15" id="cart" stroke-linecap="round" stroke-linejoin="round"></path><circle id="cart" cx="7.5" cy="20.5" r="2"></circle><circle id="cart" cx="14.5" cy="20.5" r="2"></circle></g></g></g></g></svg></a></div>
      <img src="https://lh3.googleusercontent.com/a-/AOh14GiOZK7Ii7M67abteryNYrlif0v9EMm-Ca50e00DYg=s96-c" />
  </div>
</div>
  <script src="/scripts/navbar.js"></script>`;
}