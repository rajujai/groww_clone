function navbar()
{
    return `<div class="navbar_prelogin">
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

      <ul id="myUL">
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
    <div class="loginbutton">
      <button class="login_btn">Login/Register</button>
    </div>
  </div>`;
}

export default navbar;